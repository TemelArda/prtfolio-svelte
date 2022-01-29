<script>
	import { onMount } from 'svelte';
    import {AppHome, AppBase} from "../App.js";
    export let pageName;
	let CanvasElement;
	
    console.log(pageName)
    async function getShaders(){
        let resp = await fetch("./shaders/vertex.glsl")
        let vertexShader = await resp.text()
        
        let resp2 = await fetch("./shaders/fragment.glsl")
        let fragmentShader = await resp2.text()
        return [vertexShader, fragmentShader];    
        
    }
    

	onMount( async () => {
        
        
        let shaders = await getShaders();
        new AppHome(CanvasElement, shaders);

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
