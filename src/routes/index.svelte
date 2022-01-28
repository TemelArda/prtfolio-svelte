<script context="module">
	export const prerender = true;
</script>

<script>
	import Canvas from "$lib/Canvas.svelte";
	
	let Container
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<div class="container"  bind:this={Container}>
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
				<h2 class="h2">Developer | Student | Problem Solver</h2>
				<hr class="line" />
				<p class="p">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<div class="button">
					<a href="/">
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
			<div class="exprience-container">
				<h2 class="h2">Experience</h2>
				<hr />
				<h3 class="h3">Creative Developer Intern</h3>
				<div class="info">
					<h4 class="h4">BMS Labs</h4>
					<p>2020 Sept - 2021 Sept</p>
					<p>Enschede, Netherlands</p>
				</div>
				<ul>
					<li><p>Math and Stats chair Honor roll</p></li>
				</ul>
				<br />
				<h3 class="h3">Software Developer Intern</h3>
				<div class="info">
					<h4 class="h4">Ravico Analatycs</h4>
					<p>2020 May - 2020 Sept</p>
					<p>Toronto, ON</p>
				</div>
				<ul>
					<li><p>Math and Stats chair Honor roll</p></li>
				</ul>
				<br />
				<h3 class="h3">Peer Advisor</h3>
				<div class="info">
					<h4 class="h4">Lassonde School of Engineering</h4>
					<p>2019 May - 2019 Sept</p>
					<p>Toronto, ON</p>
				</div>
				<ul>
					<li><p>Math and Stats chair Honor roll</p></li>
				</ul>
			</div>
		</div>
		<div>

		</div>
	</div>
	<Canvas/>
</section>
<style lang="scss">
	
	.container {
		position: absolute;
		width: 100%;
		height: fit-content;
		z-index: 1;
		p {
			font-family: $secondaryFont;
			font-size: $fontR1;
			color: #fff;
			font-weight: 400;
			line-height: 1.25;
			opacity: 0.83;
		}
	}
	.grid {
		height: 100vh;
		display: grid;
		grid-template-columns: repeat(6, minmax(240px, 1fr));
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
			}
			.p {
				margin: 1rem 0;
				padding: 0;
				width: 75%;
				text-align: center;
				max-width: 600px;
				line-height: 1.6;
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
				border-radius: 0 15px 0 15px;
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
	}
	.exprience-container {
		grid-column: span 2/6;
		grid-row: span 1/3;
		padding: 8px;
		margin: 0;
		justify-self: center;
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
