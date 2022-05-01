<script>
	import ProjectCard from '$lib/ProjectCard.svelte';
    import { onMount } from 'svelte/internal'
    
    let projects = []
    let buttonText = "Expand"
    let expanded = false;

    onMount(async () =>{
        const response = await fetch('/project.json');
		const data = await response.json();
		if (data.project) {
  
			projects =  data.project;
		}else{
			throw new Error('No experience found');
		}
    })


    function onButtonClick(){
        console.log(expanded);
        if(!expanded){
            buttonText = "Expand";
        }else{
            buttonText = "Shrink";
        }
        expanded = !expanded;
    }
</script>

<section>
	<div class="project-content">
        {#each projects as p,i }
            <ProjectCard
            title={p.title}
			subTitle={p.subTitle}
			imageOrder={i}
			description={p.description}
			image={p.image}
			link={p.link}
		/>
            >
        {/each}
	</div>
	<div class="button" on:click ={onButtonClick}>
		<p>
			{buttonText}
			<i class="fa-solid fa-chevrons-right" />
        </p>
	</div>
</section>

<style lang="scss">
	.project-content {
		width: 75%;
        margin-left: auto;
        margin-right: auto ;
	}
	.button {
		margin: 0;
		align-self: center;
	}
    .button {
				position: relative;
                left: 45vw;
				height: 40px;
				width: 160px;
				border-style: solid;
				border-width: 1px;
				border-color: white;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0;
				box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14),
					0px 1px 10px rgba(0, 0, 0, 0.12);
				background-color: rgba(255, 255, 255, 0.1);
				align-self: flex-end;
				backdrop-filter: blur(10px);
				transition: all 0.3s ease-out;
				cursor: pointer;
				&::after {
					position: absolute;
					bottom: 0;
					left: 0;
					right: 0;
					margin: auto;
					width: 0%;
					height: 100%;
					opacity: 0;
					content: ' ';
					background: linear-gradient(54deg, rgba(95, 217, 114, 1) 0%, rgba(119, 195, 242, 1) 100%);
					z-index: -1;
					height: 100%;
					text-align: left;
					margin: 0;
					border-radius: 0 15px 0 15px;
					transition: all 0.3s ease-out;
				}
				&:hover {
					border-radius: 15px 0 15px 0;
					box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14),
						0px 1px 18px rgba(0, 0, 0, 0.12);
					transform: translateY(-5px);
				}
				&:hover:after {
					width: 100%;
					border-radius: 15px 0 15px 0;
					opacity: 1;
				}
				&:hover p {
					color: $bgColor;
				}
				p {
					text-decoration: none;
					font-family: $primaryFont;
					text-transform: capitalize;
					font-size: $fontR1;
					color: white;
					transition: all 0.45s ease-out;
				}
			}
</style>
