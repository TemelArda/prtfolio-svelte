<script context="module">
	export const prerender = true;
	import { page } from '$app/stores';
</script>

<script>
	import Canvas from '$lib/Canvas.svelte';
	import Socials	from '$lib/socials.svelte';
	import ExprienceSlide from '$lib/ExprienceSlide.svelte'
	import ProjectsSection from '$lib/ProjectsSection.svelte'

	let Container;

	async function GetProjects(){
		let response = await fetch("/project.json");
		let data = response.json();
		if(data.projects){
			return data.projects;
		}else{
			throw new Error('No projects found');
		}
	}
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="container" bind:this={Container}>
		<div class=" grid">
			<div class="scroll-down">
				<a href="/">
					<i class="fas fa-chevron-down" />
				</a>
				<ul class="text">
					<li>s</li>
					<li>c</li>
					<li>r</li>
					<li>o</li>
					<li>l</li>
					<li>l</li>
				</ul>
				<a href="/">
					<i class="fas fa-chevron-down" />
				</a>
			</div>
			<div class="grid-item">
				<h1 class="h1">Hey! I am Arda</h1>
				<h2 class="h2">Software Designer | C++ & C# </h2>
				<hr class="line" />
				<p class="p">
					I am passioate about software design and 3D computer graphics. 
					This web page is to mainly share personal projects i worked on with the world!
					Currently, I work at Matrox as a software designer.
					Please feel free to explore some of my projects and expirences, and if anything peeks your interest let's connect!
					<br/>
					Click on the links to get in touch with me or scroll-down to see more...
					<br/>
					Also, image behind is interactive, hover to create some ripples!!
				</p>
				<Socials isMoved="no"/>
				<div class="button">
					<a href="./resume.pdf" target="_blank">
						Resume
						<i class="far fa-arrow-alt-circle-down" />
					</a>
				</div>
			</div>
		</div>
		<div class=" grid about">
			<div class="display-container">
				<h1 class="display">AB<br />OUT</h1>
			</div>
			<div class="education-container">
				<h2 class="h2">Education</h2>
				<hr />
				<img
					class="image"
					src="https://sciencesprings.files.wordpress.com/2019/09/york-university-toronto-logo.png?w=200"
					alt="York University Logo"
				/>
				<h3 class="h3">Bachelor of Computer Science</h3>
				<div class="info">
					<h4 class="h4">York University</h4>
					<p>Toronto, ON</p>
					<p>2019 - Ongoing</p>
					<p><b>GPA:</b> 3.8/4.0</p>
				</div>
				<ul>
					<li><p>Math and Stats chair Honor roll</p></li>
				</ul>
			</div>
			<div class="experience-container">
				<h1 style="margin: 0;" >Experience</h1>
				<div class="experience-content">
					<ExprienceSlide/>
					<!-- {#each experience as e, i}
						<div class="experience-card">
							<img
								class="image"
								src = "{e.src}"
								alt="{e.alt}"
							/>
							<h3 class="h3">{e.Title}</h3>
							<hr />
							<div class="experience-info">
								<h4 class="h4">{e.Company}</h4>
								<p>{e.Location}</p>
							</div>
							<p class="date">{e.Dates}</p>
							<div class="description">
								<p class="description">{e.description}</p>
							</div>
							<div class="link"><a href="{e.link}" target="_blank"><i class="fas fa-link"></i></a></div>
						</div>
					{/each} -->
				</div>
			</div>
		</div>
		<div class="grid">
			<div class="grid-container">
				<h1>Projects</h1>
				<ProjectsSection/>
			</div>
			<div class="grid-container">
				<div class="contact-content">
					<div class="contact-header">
						<p>Contact</p>
						<h1>Get In Touch</h1>
					</div>
					<div class="contact-body">
						<p> Currently I am on an internship term for summer at OssKin!
							However, I am always interested in new oppurtunities and would love to hear from you!
							If you are interested in working with me, please feel free to contact me.
							My inbox is always open and I will respond to your message as soon as possible.
						</p>
					</div>
					<div class="button">
						<a href="mailto:arda.temel98@gmail.com">
							Say Hi!
							<i class="fa-solid fa-chevrons-right"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div />
	</div>
	<Canvas pageName={$page.url.pathname} />
</section>

<style lang="scss">
	.contact-content{
		width: 75%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin: 25vh 0;
		.contact-header{
			width: 100%;
			h1{
				width: 100%;
				opacity: .83;
				font-size: $font6L;
			}
			p{
				text-align: center;
				opacity: .83;
				font-weight: bold;
				font-size: $fontL;
				color: rgba(68, 247, 208, 0.733);
				margin: 0;
				font-family: $altFont;
			}
		}
		.contact-body{
			width:40%;
			text-align: center;
			padding: 2rem;
			p{
				font-size: $fontR1;
				opacity: .83;
				margin: 0;
				font-family: $secondaryFont;
			}
		}
		.button{
			align-self: center;
			border-radius: 0;
		}
	}
	.grid-container{
		grid-column: 1/ span 6;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-items: center;
		flex-direction: column;
		h1{
			margin:0;
			width: 50%;
			text-align: center;
		}
		
	}
	.container {
		position: absolute;
		width: 100%;
		height: fit-content;
		z-index: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		p {
			font-family: $secondaryFont;
			font-size: $fontR1;
			color: #fff;
			font-weight: 400;
			line-height: 1.25;
			opacity: 0.83;
		}
		h1{
			color: #fff;
			opacity: .83;
			font-family: $primaryFont;
			font-size: $font3L;
		}
	}
	.grid {
		margin: auto;
		min-height: 100vh;
		display: grid;
		grid-template-columns: repeat(6, minmax(200px, 350px));
		grid-gap: 1rem;
		align-items: center;
		.grid-item {
			grid-column: span 3/5;
			display: flex;
			align-items: center;
			flex-direction: column;
			.h1 {
				font-family: $primaryFont;
				font-weight: 400;
				font-style: normal;
				font-size: $font4L;
				color: white;
				opacity: 83%;
				text-align: center;
				margin: 0;
			}
			.h2 {
				font-family: $primaryFont;
				font-weight: 400;
				font-style: normal;
				font-size: $font2L;
				color: white;
				opacity: 83%;
				text-align: center;
				margin: 0;
			}
			.line {
				border-color: white;
				width: 100%;
				margin: 1rem 0;
				max-width: 900px;
				opacity: .83;
			}
			.p {
				margin: 1rem 0;
				padding: 0;
				width: 75%;
				text-align: center;
				max-width: 600px;
				line-height: 1.6;
			}
		}
		.scroll-down {
			display: flex;
			align-items: center;
			flex-direction: column;
			&:hover a {
				animation: moveDown 1s forwards infinite;
				-webkit-animation: moveDown 1s forwards infinite;
				-moz-animation: moveDown 1s forwards infinite;
			}
			&:hover .text {
				transform: translateY(7px);
				opacity: 1;
			}
			a {
				text-decoration: none;
				color: #fff;
				font-size: $fontL;
				margin-bottom: 10px;
				margin-top: 10px;
				opacity: 0.5;
			}
			.text {
				list-style: none;
				text-transform: uppercase;
				text-align: center;
				margin: 0;
				padding: 0;
				color: white;
				font-size: $fontR1;
				font-family: $altFont;
				font-weight: 500;
				opacity: 0.75;
				transition: all 0.3s ease-in-out;
			}
		}
	}
	.button {
				position: relative;
				margin-top: 1rem;
				margin-right: 5rem;
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
				&:hover a {
					color: $bgColor;
				}
				a {
					text-decoration: none;
					font-family: $primaryFont;
					text-transform: capitalize;
					font-size: $fontR1;
					color: white;
					transition: all 0.45s ease-out;
				}
			}
	.about {
		p {
			font-family: $secondaryFont;
			font-size: $fontR1;
			color: #fff;
			font-weight: 400;
			line-height: 1.25;
			opacity: 0.83;
		}
		.h2 {
			font-family: $primaryFont;
			font-weight: 400;
			font-style: normal;
			font-size: $font2L;
			color: white;
			opacity: 83%;
			text-align: center;
			margin: 0;
		}
		grid-template-rows: 0.5fr 1fr;
		align-items: start !important;
		.h3 {
			font-family: $primaryFont;
			font-weight: 400;
			font-style: normal;
			font-size: $fontXL;
			color: white;
			opacity: 83%;
			margin: 0;
		}
		.info {
			display: flex;
			justify-content: space-between;
			.h4 {
				font-family: $primaryFont;
				font-weight: 400;
				font-style: normal;
				font-size: $fontL;
				color: white;
				opacity: 83%;
				margin: 8px 0;
			}
			p {
				margin: 8px 0;
			}
		}
		ul {
			margin: 0;
			padding: 0 16px;
			color: white;
			li {
				margin: 0;
				padding: 0;
				p {
					margin: 0;
					padding: 0;
				}
			}
		}
	}
	.display-container {
		grid-column: span 1/3;
		width: 330px;
		height: 330px;
		border: white solid 1px;
		opacity: 0.5;
		margin: 20px 0;
		align-self: start;
		display: flex;
		justify-content: center;
		align-items: center;
		.display {
			font-size: $font7L;
			color: white;
			font-family: $primaryFont;
			font-weight: 400;
			margin: 0;
			padding: 0;
			text-align: start;
		}
	}
	.education-container {
		grid-column: span 2/6;
		grid-row: span 1/2;
		padding: 8px;
		margin: 0;
		align-self: center;
		display: flex;
		flex-direction: column;
		hr {
			width: 100%;
		}
	}
	.experience-container {
		grid-column: span 6/7;
		grid-row: span 1/3;
		padding: 12px;
		margin: 0;
		justify-self: center;
		align-self: start;
		flex-wrap: wrap;
		.experience-content {
			display: flex;
			justify-content: space-around;
			align-items: center;
			flex-wrap: wrap;
		}
		.h4 {
			color: white;
			font-family: $primaryFont;
			font-weight: 400;
			font-style: normal;
			font-size: $fontL;
			margin: 4px 8px;
			padding: 0;
		}
		.h3 {
			color: white;
			font-family: $primaryFont;
			font-weight: 400;
			font-style: normal;
			font-size: $fontXL;
			margin: 4px 8px;
			padding: 0;
		}
		.experience-card {
			margin: 1rem;
			background: rgb(255, 255, 255);
			background: radial-gradient(
				circle,
				rgba(42, 95, 87, 0.5) 23%,
				rgba(103, 191, 178, 0.5) 65%,
				rgba(57, 195, 128, 1) 100%
			);
			border: rgba(57, 195, 128, 1) solid 1px;
			
			padding: 1rem;
			box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 6px 10px rgba(0, 0, 0, 0.14),
				0px 1px 18px rgba(0, 0, 0, 0.12);
			display: flex;
			flex-direction: column;
			max-width: 450px;
			&:hover {
				transform: translateY(-5px);
			}
			transition: all 0.3s ease-in-out;
			hr{
				width: 100%;
				border-color: white;
			}
		}
		.experience-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-wrap: wrap;
			color: $bgColor;
		}
		p {
			color: white;
			font-family: $secondaryFont;
			font-weight: 400;
			margin: 0;
			margin-top: 4px;
			padding: 0;
		}
		.date {
			text-align: end;
		}
		.description{
			margin: 0;
			padding: 0;
			width: 100%;
		}
		.link{
			align-self: flex-end;
			opacity: .83;
			cursor: pointer;
			background: $bgColor;
			padding: 8px;
			margin: 0;
			clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
			a{
				color: rgb(68, 247, 160);
				opacity: 0.8;
			}
		}
	}
	.image {
		width: 20%;
		height: auto;
		align-self: center;
		margin: 4px 0;
	}
	@media (max-width: 767.98px) {
		.grid {
			display: grid;
			grid-template-columns: repeat(2, minmax(190px, 1fr));
			gap: 0.5rem;
			align-items: end;
			.grid-item {
				grid-column: span 4/5;
				display: flex;
				flex-direction: column;
				padding: 8px;
				.h1 {
					font-size: $font2L;
				}
				.h2 {
					font-size: $fontL;
				}
				.p {
					font-size: $fontR1;
					width: 100%;
					margin: 0.5rem 0;
				}
				.button {
					align-self: center;
					justify-self: center;
					margin: 1rem 0 0 0;
				}
			}
		}
		.scroll-down {
			order: 2;
			grid-column: span 4/5;
			grid-row: 2 / span 1;
			.text {
				display: flex;
				li {
					margin: 0 0.75rem;
				}
			}
		}
		.about {
			grid-template-rows: 0.25fr 0.5fr 1fr;
		}
		.experience-container {
			grid-column: span 3/3;
			grid-row: span 1/4;
			.experience-content {
				justify-content: center;
			}
		}
		.education-container {
			grid-column: span 3/3;
			grid-row: span 1/3;
			padding: 24px;
			align-self: flex-start;
			.h3 {
				font-size: $fontL;
			}
			.info {
				flex-wrap: wrap;
				justify-content: space-around;
			}
			.h4 {
				font-size: $fontR1 !important;
			}
		}
		.display-container {
			grid-column: span 3/3;
			width: 90%;
			height: fit-content;
			margin: 8px;
			justify-self: center;
			.display {
				font-size: $font5L;
			}
			br {
				display: none;
			}
		}
	}
	@-webkit-keyframes moveDown {
		0% {
			transform: translateY(0px);
			opacity: 1;
		}
		100% {
			transform: translateY(25px);
			opacity: 0;
		}
	}
</style>
