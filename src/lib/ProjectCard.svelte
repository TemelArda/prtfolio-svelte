<script>
	export let title;
	export let subTitle;
	export let description;
	export let image;
	export let link;
	export let imageOrder;
	export let github;
</script>

<section>
	<div class="project-card">
		<div class="card-content" style="order: {imageOrder % 2};">
			<div class="card-header">
				<h3 class="title">{title} </h3>
				<h5 class="sub-title">{subTitle}</h5>
			</div>

			<div class="card-body">
				<p class="description">{description}</p>
			</div>
			<div class="card-footer">
				<a class="link" href={github ? github : "https://github.com/TemelArda"} target="_blank">
					<i class="fab fa-github fa-xl" />
				</a>
				{#if link}
				<a class="link" href={link} target="_blank">
					<i class="fas fa-external-link-alt"></i>
				</a>
				{/if}
			</div>
		</div>
		<div class="media">
			<img src={image} alt="projectImage" />
		</div>
	</div>
</section>

<style lang="scss">
	.project-card {
		max-width: 90%;
		height: fit-content;
		margin: 5rem;
		color: #fff;
		display: flex;
		justify-content: space-evenly;
        .card-content{
            display: flex;
            flex-direction: column;
            align-items: start;
            justify-content: space-around;
            width: 50%;
            padding: .3rem;
        }
		.title {
			font-size: $fontXL;
			font-family: $primaryFont;
			font-weight: 500;
			margin: 4px;
			color: #fff;
			opacity: 0.83;
		}
		.sub-title {
			font-size: $fontL;
			font-family: $primaryFont;
			font-weight: bold;
			margin: 4px;
			color: rgb(68, 247, 160);
			opacity: 0.63;
		}
		.card-body {
			background-color: $bgColor-300;
			padding: 0.3rem;
            opacity: 0.8;
			box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12);
			width: 105%;
			margin-left: -1rem;
            p{
                color: #fff;
                opacity: 0.83;
                font-family: $secondaryFont;
                font-size: $fontR1;
            }
		}
		.card-footer{
			justify-self: end;
			align-self: flex-end;
			margin: 1rem;
			
		}
		.link{
			color: #fff;
			opacity: 0.5;
			font-size: $fontXL;
			&:hover{
				color: rgb(68, 247, 160);
				opacity: 0.8;
			}
			transition: all 0.3s ease-in-out;
			margin: 0 0 0 4px ;
		}
		.media {
			width: 50%;
			height: 300px;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
	}
</style>
