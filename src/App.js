

import * as THREE from 'three';
import gsap from 'gsap';
import Particles from './particles.js';
import { smoothScroll } from './scroll.js';

export class AppBase {
    constructor(canvas, shaders) {
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
        this.time = 0;
        this.mouse = new THREE.Vector2();
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            powerPreference: "high-performance",
            antialias: false,
            stencil: false,
            depth: true
        });
        this.camera = new THREE.PerspectiveCamera(75, this.canvasWidth / this.canvasHeight, 0.1, 2000);
        this.renderer.setSize(this.canvasWidth, this.canvasHeight);
        this.scene = new THREE.Scene();
        this.vert = shaders[0];
        this.frag = shaders[1];
        
        //Initilize Events, Scene, Objects, and Camera

    }
    windowEvents() {
        
        //Responsive Canvas
        window.addEventListener('resize', this.resize.bind(this));
        window.addEventListener('mousemove', this.mouseMove.bind(this));
        //window.addEventListener('scroll', this.scroll.bind(this));

    }
    initScene(){
       console.log("initilzating scene");
    }
    resize() {
        this.canvasWidth = window.innerWidth;
        this.canvasHeight = window.innerHeight;
        this.renderer.setSize(this.canvasWidth, this.canvasHeight);
        this.camera.aspect = this.canvasWidth / this.canvasHeight;
        this.camera.updateProjectionMatrix();
        this.material.uniforms.resolution.value = new THREE.Vector2(this.canvasWidth, this.canvasHeight);
        if(this.pointMultiplier != 2)
            this.material.uniforms.pointMultiplier.value = window.innerHeight / ( Math.tan(0.5 * 60.0 * Math.PI / 180.0))
    }
    initParticles() {
       console.log("initilzating textures")
    }

    updateScene() {
        
    }
    render() {
        this.time += 0.01;
        this.updateScene();   
        this.renderer.render(this.scene, this.camera);
        smoothScroll();
        requestAnimationFrame(this.render.bind(this));
    }
}

export class AppHome extends AppBase{
    constructor(canvas, shaders) {
        super(canvas, shaders);
        this.raycaster = new THREE.Raycaster();
        this.pointMultiplier =  window.innerHeight / ( Math.tan(0.5 * 60.0 * Math.PI / 180.0));
        this.clock = new THREE.Clock();
        this.lastIntersection = 0;
        this.rippleStart = 0;
        this.initScene();
        this.initTextures();
        this.initParticles();
        this.windowEvents();
        this.addMesh();
        super.render();
    }
    windowEvents() {
        super.windowEvents();
       
    }
    mouseMove(e) {
        //If we are sphere we do not do mouse move events
        if(this.material.uniforms.progress.value > 1) return;
        this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        let intersections = this.raycaster.intersectObjects([this.mesh], false);
        let intersection = (intersections.length) > 0 ? intersections[0] : null;

        if (intersection !== null) {
            this.lastIntersection = this.clock.getElapsedTime();

            gsap.to(this.material.uniforms.rippleInflunce, { duration: .2, value: 1. });
            this.modifyMousePosition(intersection.point, .5);
        } else {
            if (this.rippleStart == 0 || this.material.uniforms.texture_influence.value < 0.5) {
                this.modifyMousePosition(new THREE.Vector3(0, 0, 0), .5);
                if(this.material.uniforms.texture_influence.value > 0.75)
                    gsap.to(this.material.uniforms.rippleInflunce, { duration: .5, value: 0. });
            }
        }
    }
    modifyMousePosition(point, duration) {
        gsap.to(this.material.uniforms.mouseClickX, {
            duration: duration,
            delay: 0.2,
            ease: "SlowMo",
            value: point.x
        });
        gsap.to(this.material.uniforms.mouseClickY, {
            duration: duration,
            delay: 0.2,
            ease: "SlowMo",
            value: point.z
        });
    }
    scroll(e) {
        let scroll = window.scrollY * 2
        this.material.uniforms.texture_influence.value = 1 - scroll / window.innerHeight;
        if(scroll / window.innerHeight < .5){
            gsap.to(this.camera.position, { duration: 2.5, x: 270, y: 500, z: 0 });
            gsap.to(this.camera.rotation, { duration: 2.5, x: -Math.PI / 2, y: 0, z: Math.PI });
            this.pointMultiplier =  window.innerHeight / ( Math.tan(0.5 * 60.0 * Math.PI / 180.0));
            gsap.to(this.material.uniforms.pointMultiplier, { duration: 1.5, value: this.pointMultiplier });
        }else  if (scroll / window.innerHeight >= .5 && scroll / window.innerHeight < 1.75) {
            gsap.to(this.camera.position, { duration: 2.5, x: 200, y: 200, z: 370 });
            gsap.to(this.camera.rotation, { duration: 2.5, x: -Math.PI / 6 , y: Math.PI / 12 , z: 0 });
            this.pointMultiplier = window.innerHeight / 1.5 * ( Math.tan(0.5 * 60.0 * Math.PI / 180.0));;
            gsap.to(this.material.uniforms.pointMultiplier, { duration: 1.5, value: this.pointMultiplier });
        }else if (scroll/ window.innerHeight > 1.75) {  
            gsap.to(this.camera.position, { duration: 2.5, x: 0, y: 250, z: 700 });
            gsap.to(this.camera.rotation, { duration: 2.5, x: -Math.PI / 8, y: Math.PI / 8, z: 0 });   
        }
    }

    initScene(){
        this.camera.position.set(270, 500, 0);
        this.camera.lookAt(0, 0, 0);
        this.camera.rotation.x = -Math.PI / 2;
        this.camera.rotateZ(Math.PI/2);
        this.camera.rotateY(Math.PI/8);
    }
    initTextures() {
        this.particle = new THREE.TextureLoader().load("./particle.png");
        this.texture = new THREE.TextureLoader().load("./texture.jpg");
        this.mask = new THREE.TextureLoader().load("./Mask.png");
    }
    initParticles(){
        this.particles = new Particles(2000, 1500, 6.5);
        this.particleMesh = this.particles.getMesh();
        this.particleMesh.material.map = this.particle;
        this.scene.add(this.particleMesh);
    }
    addMesh() {
        this.geometry = new THREE.BufferGeometry();
        this.setUpGeometryAttributes();
        this.material = new THREE.ShaderMaterial({
            fragmentShader: this.frag,
            vertexShader: this.vert,
            uniforms: {
                u_time: { value: this.time, type: 'f' },
                mask: { value: this.mask, type: 't' },
                texture1: { value: this.texture, type: 't' },
                blending: THREE.AdditiveBlending,
                mouseClickX: { value: 0, type: 'f' },
                mouseClickY: { value: 0, type: 'f' },
                progress: { value: 0, type: 'f' },
                rippleInflunce: { value: 0, type: 'f' },
                texture_influence: { value: 1, type: 'f' },
                resolution: { value: new THREE.Vector2(this.canvasHeight, this.canvasHeight), type: 'v2' },
                pointMultiplier: {
                    value: this.pointMultiplier,
                    type: 'f'
                }
            },
            transparent: true,
            depthTest: false,
            depthWrite: false,
            side: THREE.DoubleSide
        });
        this.mesh = new THREE.Points(this.geometry, this.material);
        this.scene.add(this.mesh);
    }
    setUpGeometryAttributes() {
        let numVertices = 512;
        
        this.positions = new THREE.BufferAttribute(new Float32Array(numVertices * numVertices * 3), 3);
        this.uvs = new THREE.BufferAttribute(new Float32Array(numVertices * numVertices * 2), 2);
        
        let vertex = 0;
        for (let i = 0; i < numVertices; i++) {
            let posX = i - (numVertices / 2);
            for (let j = 0; j < numVertices; j++) {
                this.positions.setXYZ(vertex, posX, 0, j - (numVertices / 2));
                this.uvs.setXY(vertex, i / numVertices, j / numVertices);
                vertex++;
            }
        }
       
        this.geometry.setAttribute('position', this.positions);
        this.geometry.setAttribute('uv', this.uvs);
    }

    randomRipples(interval) {
        if(Math.abs(this.clock.getElapsedTime() - this.lastIntersection) > interval){
            //Do random ripple
            if(this.rippleStart == 0){
                this.rippleStart =  this.clock.getElapsedTime();
                let x = randomInterval(-250, 250);
                let y = randomInterval(-250, 250);
                let point = new THREE.Vector3(x, y, 0);
                gsap.to(this.material.uniforms.rippleInflunce, { duration: .2, value: 1. });
                this.modifyMousePosition(point, 1);
            }
            if(Math.abs(this.clock.getElapsedTime() - this.rippleStart) > 1){
                this.lastIntersection = this.clock.getElapsedTime();
                this.rippleStart = 0;
                gsap.to(this.material.uniforms.rippleInflunce, { duration: .5, value: 0. });
            }
        }
    }
    updateScene() {
        let scroll = window.scrollY * 2
        this.material.uniforms.u_time.value = this.time;
        this.material.uniforms.texture_influence.value = 1 - scroll / window.innerHeight;
        
        if(scroll / window.innerHeight < .5){
            gsap.to(this.camera.position, { duration: 2.5, x: 270, y: 500, z: 0 });
            gsap.to(this.camera.rotation, { duration: 2.5, x: -Math.PI / 2, y: 0, z: Math.PI });
            gsap.to(this.material.uniforms.progress, { duration: 2.5, value: 0 });
            this.randomRipples(3);
            this.pointMultiplier =  window.innerHeight / ( Math.tan(0.5 * 60.0 * Math.PI / 180.0));
            gsap.to(this.material.uniforms.pointMultiplier, { duration: 1.5, value: this.pointMultiplier });
        }else  if (scroll / window.innerHeight >= .5 && scroll / window.innerHeight < 1.75) {
            gsap.to(this.camera.position, { duration: 2.5, x: 200, y: 200, z: 370 });
            gsap.to(this.material.uniforms.progress, { duration: 2.5, value: 0 });
            gsap.to(this.material.uniforms.rippleInflunce, { duration: .2, value: 1 });
            gsap.to(this.camera.rotation, { duration: 2.5, x: -Math.PI / 6 , y: Math.PI / 12 , z: 0 });
            this.pointMultiplier = window.innerHeight / 1.5 * ( Math.tan(0.5 * 60.0 * Math.PI / 180.0));;
            gsap.to(this.material.uniforms.pointMultiplier, { duration: 1.5, value: this.pointMultiplier });
        }else if (scroll/ window.innerHeight > 1.75) {
            gsap.to(this.material.uniforms.progress, { duration: 3.5, value: 1.4 });   
            gsap.to(this.camera.position, { duration: 2.5, x: 0, y: 250, z: 700 });
            gsap.to(this.camera.rotation, { duration: 2.5, x: -Math.PI / 8, y: Math.PI / 8, z: 0 });   
        }

        
        this.particleMesh.rotation.y += 0.001;
        //this.particleMesh.rotation.x -= 0.001;
        this.particleMesh.rotation.z += 0.001;
    }
}


function randomInterval(min, max){
    return Math.random() * (max - min + 1) + min;
}