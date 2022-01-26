<script>
	import { afterUpdate, onMount } from 'svelte';
    import App from "../WebGL.js";
    import load from "load-asset";
	let CanvasElement;
	async function getShaders(){
        let resp = await fetch("./shaders/vertex.glsl")
        let vertexShader = await resp.text()
        
        let resp2 = await fetch("./shaders/fragment.glsl")
        let fragmentShader = await resp2.text()
        return [vertexShader, fragmentShader];    
        
    }
    async function loadImages(){
        let images = {
            mask: "/Mask.png",
            particle: "/particle.png",
            texture: "/texture.jpg",
        }
        const data = await load.all(images);
        return data;
    }
	afterUpdate(() => {});

	onMount( async () => {
        
        let images = await loadImages();
        
        let shaders = await getShaders();
        new App(CanvasElement, shaders, images);

	});
</script>

<canvas id="canvas" bind:this={CanvasElement} />

<style>
	#canvas {
		display: block;
		width: 100vw ;
		height: 100vh ;
		position: fixed;
        z-index: 0;
		top: 0;
		left: 0;
	}
</style>
