<script>
	import gsap from 'gsap';
	import { onMount } from 'svelte';
	import Socials from '../socials.svelte';
	
	function openNavBar() {
		gsap.to('.Nav-Bar', { width: '100%', duration: 0.75, ease: 'power2.inOut' });
		gsap.to('.move', { x: 0, duration: 1, delay: 0.35, ease: 'back.out(1.7)' });
	}
	const closeNavBar = () => {
		gsap.to('.Nav-Bar', { width: '0%', duration: 0.45, delay: 0.25, ease: 'power2.inOut' });
		gsap.to('.move', { x: 1200, duration: 0.55 });
	};
	onMount(async () => {
		gsap.set('.Nav-Bar', { width: '0%' });
	});
</script>

<header>
	<div class="Page-Logo">
		<a class="logo" href="/">
			<span>Arda Temel</span>
			
		</a>
	</div>
	<div class="Hamburger" on:click={openNavBar}>
		<div class="Hamburger-Line" />
		<div class="Hamburger-Line" />
		<div class="Hamburger-Line" />
	</div>
	<div class="Nav-Bar">
		<div class="Nav-Bar-Container">
			<div class="close-button" on:click={closeNavBar}>
				<button type="button">&times;</button>
			</div>
			<nav class="Nav-Bar-Links">
				<ul>
					<li class="Nav-Item">
						<a sveltekit:prefetch href="/">Home</a>
					</li>
					<li class="Nav-Item">
						<a sveltekit:prefetch href="/">About</a>
					</li>
					<li class="Nav-Item">
						<a sveltekit:prefetch href="/">Exprience</a>
					</li>
					<li class="Nav-Item">
						<a sveltekit:prefetch href="/">Projects</a>
					</li>
					<li class="Nav-Item">
						<a sveltekit:prefetch href="/">Contact</a>
					</li>
				</ul>
			</nav>
			<Socials isMoved = "move"/>
		</div>
	</div>
	<div class = "code-container">
		<a href="https://github.com/TemelArda/Portfolio" target="_blank">
		  <i class="fas fa-code"></i>
		</a>
	</div>
</header>

<style lang="scss">
	header {
		display: flex;
		justify-content: space-between;
	}
	
	.Page-Logo {
		display: flex;
		position: fixed;
		top: 0;
		left: 0;
		padding: 0;
		width: auto;
		margin: 4rem 3rem;
		z-index: 2;
		.logo {
			font-family: $altFont;
			text-decoration: none;
			color: white;
			font-size: $font2L;
			transition: all 0.3s ease-in-out;
		}
		&:hover a {
			color: #5fd972;
			scale: 1.1;
			//box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 1px 14px rgba(0, 0, 0, 0.12);
		}
	}
	.Hamburger {
		display: block;
		position: fixed;
		top: 0;
		right: 100px;
		margin-top: 4rem;
		width: 2rem;
		height: auto;
		z-index: 2;
		cursor: pointer;
		.Hamburger-Line {
			display: block;
			width: 100%;
			height: 0.125rem;
			margin: 7px 0;
			background-color: white;
			transition: all 0.2s ease-in-out;
			&:nth-child(2) {
				width: 75%;
			}
		}
		&:hover .Hamburger-Line {
			width: 75%;
			&:nth-child(2) {
				width: 100%;
			}
		}
	}

	.Nav-Bar {
		padding: 0;
		position: fixed;
		top: 0;
		right: 0;
		width: 0;
		height: 100%;
		z-index: 2;
		background-color: #0d1117;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg fill-opacity='0.4'%3E%3Cpolygon fill='%230f141b' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%2311171f' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23141923' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23161c27' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23181F2B' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: cover;
	}

	.Nav-Bar-Container {
		height: 100%;
		width: 100%;
	}
	.close-button {
		width: auto;
		height: auto;
		padding: 1rem 0 0 3rem;
		button {
			font-family: $altFont;
			text-decoration: none;
			color: white;
			font-size: $font4L;
			transition: all 0.3s ease-in-out;
			background-color: transparent;
			border: none;
			cursor: pointer;
			&:hover {
				transform: translateY(-10px) rotate(180deg) scale(1.1);
				//box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2), 0px 5px 8px rgba(0, 0, 0, 0.14), 0px 1px 14px rgba(0, 0, 0, 0.12);
			}
			transition: all 0.3s ease-in-out;
		}
	}
	.Nav-Bar-Links {
		width: 100%;
		padding: 0;
		display: flex;
		height: 70%;
		justify-content: center;
		align-items: center;
		ul {
			list-style: none;
			padding: 0;
			width: 100%;
			.Nav-Item::after {
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				margin: auto;
				width: 0%;
				content: ' ';
				background: #aaa;
				height: 1.04rem;
				text-align: left;
				margin: 0;
			}
			.Nav-Item {
				padding: 1rem 0;
				transition: all 0.3s ease-in-out;
				border-bottom: 1px solid rgba(255, 255, 255, 0.514);
				position: relative;
				&:hover a {
					position: relative;
					color: $bgColor;
					z-index: 10;
				}
				&:hover:after {
					animation: fill 0.65s forwards;
					-webkit-animation: fill 0.65s forwards;
					-moz-animation: fill 0.65s forwards;
					opacity: 1;
				}
			}
		}

		a {
			font-family: $altFont;
			text-decoration: none;
			color: white;
			font-size: $font3L;
			padding: 0px;
			margin-left: 150px;
			transition: color 0.65s ease-in-out;
			&:hover {
				scale: 1.2;
			}
		}
	}
	
	.code-container {
		position: fixed;
		bottom: 0;
		right: 0;
		margin: 32px;
		background-color: wheat;
		z-index: 2;
		padding: 4px;
		clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
		i {
			color: $bgColor;
		}
	}
	@media screen and (max-width: 480px) {
		.Nav-Bar-Links {
			a {
				margin: 0 4rem;
			}
		}
		.close-button {
			padding: 0 1rem;
		}
		.Hamburger {
			margin: 1rem;
			right: 1rem;
			top: 0;
			scale: 0.8;
		}
		.Page-Logo {
			margin: 1rem;
			.logo {
				font-size: $fontL;
			}
		}
		.socials {
			justify-content: space-around;
		}
		.scroll-down {
			order: 2;
			grid-column: span 4/5;
			grid-row: 2 / span 1;
			align-self: start;
			.text {
				display: flex;
				li {
					margin: 0 0.75rem;
				}
			}
		}
	}
	@media screen and (max-width: 820px) and (min-width: 430px) {
		.scroll-down {
			order: 2;
			grid-column: span 4/5;
			grid-row: 2 / span 1;
			align-self: start;
			.text {
				display: flex;
				li {
					margin: 0 0.75rem;
				}
			}
		}
		.Hamburger {
			margin: 4rem 0;
			right: 4rem;
		}
	}
	@-webkit-keyframes fill {
		0% {
			width: 0%;
			height: 1px;
		}
		50% {
			height: 4px;
			width: 100%;
		}
		100% {
			width: 100%;
			height: 100%;
			background: #fff;
		}
	}
</style>
