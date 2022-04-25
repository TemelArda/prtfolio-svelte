import {Points, PointsMaterial, BufferGeometry, Float32BufferAttribute} from "three";

export default class Particles{
    constructor(numParticles, spread, size){
        this.numParticles = numParticles;
        this.spread = spread;
        this.size = size;
        this.createMesh();
    }

    
   
    setMesh(numParticles, spread, size){
        this.numParticles = numParticles;
        this.spread = spread;
        this.size = size;

        this.createMesh();
    }
    createMesh(){
        this.geometry = new BufferGeometry();
        const pos = [];
        const col = [];
        for (let i = 0; i < this.numParticles; i++) {
            let x = Math.random() * this.spread - this.spread / 2;
            let y = Math.random() * this.spread - this.spread / 2;
            let z = Math.random() * this.spread - this.spread / 2;
            pos.push(x, y, z);
            
            
            let xc = (x/this.spread) + .5;
            let yc = (y/this.spread) + .5;
            let zc = (z/this.spread) + .5;
            col.push(xc, yc, zc);
        }
        this.geometry.setAttribute('position', new Float32BufferAttribute(pos, 3));
        this.geometry.setAttribute('color', new Float32BufferAttribute(col, 3));
        
        this.material = new PointsMaterial({
            size:this.size, 
            vertexColors: true, 
            sizeAttenuation: false,
            transparent: true,
            depthTest: false,
            depthWrite: false,
            fog: false
        });
        
        console.log(this.material);
        this.mesh = new Points(this.geometry, this.material);
    }

    getMesh = () => this.mesh;
    
}