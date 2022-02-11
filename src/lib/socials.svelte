<script>
	export let isMoved;
</script>

<section>
	<ul class:move={isMoved == "move"} class="socials">
		<li>
			<a href="https://www.facebook.com/arda.temel.37" target="_blank">
				<i class="fab fa-facebook-square" />
			</a>
		</li>
		<li>
			<a href="https://www.instagram.com/temel.arda/" target="_blank">
				<i class="fab fa-instagram" />
			</a>
		</li>
		<li>
			<a href="https://www.linkedin.com/in/arda-temel-3ab708180/" target="_blank">
				<i class="fab fa-linkedin" />
			</a>
		</li>
		<li>
			<a href="https://github.com/TemelArda" target="_blank">
				<i class="fab fa-github" />
			</a>
		</li>
		<li>
			<a href="mailto:arda.temel98@gmail.com" target="_blank">
				<i class="fa-solid fa-paper-plane"></i>
			</a>
		</li>
	</ul>
</section>
<style lang="scss">
	.move{
		transform: translateX(1200px);
	}
	.socials {
		margin-top: 2rem;
		display: flex;
		justify-content: center;
		list-style: none;
		padding: 0;
		width: auto;
		li {
			margin: 0 1rem;
			a {
				font-size: $font2L;
				color: white;
				opacity: 83%;
				cursor: pointer;
				transition: all 0.3s ease-in-out;
				&:hover {
					color: #62faa6;
				}
			}
		}
	}
</style>
