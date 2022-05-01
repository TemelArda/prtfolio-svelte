<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/pagination';
	import 'swiper/css/navigation';

	// import required modules
	import { Pagination, Navigation } from 'swiper';
	let promise = GetExperience();
	async function  GetExperience () {
		const response = await fetch('/exprience.json');
		const data = await response.json();
		if (data.experience) {
			return data.experience;
		}else{
			throw new Error('No experience found');
		}
		
	};
</script>

<section>
	{#await promise then experience}
		<Swiper
			pagination={{
				type: 'progressbar'
			}}
			navigation={true}
			modules={[Pagination, Navigation]}
			grabCursor={true}
			loop={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: true
			}}
		>
			{#each experience as e, i}
				<SwiperSlide>
					<div class="experience-card">
						<div class="media">
							<img class="image" src={e.src} alt={e.alt} />
						</div>
						<div class="content">
							<h3 class="h3">{e.Title}</h3>
							<h4 class="h4">{e.Company}</h4>

							<div class="experience-info">
								<p>{e.Location}</p>
								<p class="date">{e.Dates}</p>
							</div>
							<div>
								<ul>
									{#each e.description as d}
										<li>
											<p class="description">{d}</p>
										</li>
									{/each}
								</ul>
							</div>
							<div class="link">
								<a href={e.link} target="_blank">
									<i class="fas fa-link" />
								</a>
							</div>
						</div>
					</div>
				</SwiperSlide>
			{/each}
		</Swiper>
	{/await}
</section>

<style lang="scss">
	.experience-card {
		width: 70%;
		height: 70%;
		background: radial-gradient(
			circle,
			rgba(42, 95, 87, 0.3) 20%,
			rgba(103, 191, 178, 0.35) 70%,
			rgba(46, 156, 103, 0.9) 100%
		);
		border-radius: 5px;
		padding: 0.5rem;
		display: flex;
		align-items: center;
		.media {
			width: 30%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-left: 20px;
			.image {
				border-radius: 5px;
				height: 60%;
				width: auto;
			}
		}
		.content {
			width: 70%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: white;
			opacity: 0.83;
			padding: 1rem;
			.h3 {
				font-size: $font2L;
				font-weight: 500;
				font-family: $primaryFont;
				margin: 0;
				padding: 0;
				text-align: left;
			}
			.h4 {
				font-size: $fontXL;
				font-weight: 500;
				font-family: $primaryFont;
				margin-bottom: 0.5rem;
				margin: 1rem 0;
				padding: 0;
				text-align: left;
			}
			.experience-info {
				display: flex;
				justify-content: space-between;
				p {
					font-size: $fontR1;
					margin-bottom: 0.5rem;
					color: white !important;
					font-family: $secondaryFont;
					font-weight: bold;
				}
			}
			ul {
				text-align: left;
				margin: 0 0.5rem;
				padding: 0 0;
				.description {
					margin: 0 0 8px 0;
					padding: 0;
					font-size: $fontR1;
					font-family: $secondaryFont;
					font-weight: normal;
					color: white;
				}
			}
			.link {
				align-self: flex-end;
				opacity: 0.83;
				cursor: pointer;
				background: $bgColor;
				padding: 8px;
				margin: 0;
				clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
				a {
					color: rgb(68, 247, 160);
					opacity: 0.8;
				}
			}
		}
	}
</style>
