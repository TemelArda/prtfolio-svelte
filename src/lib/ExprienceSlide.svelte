<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';

	import 'swiper/css/pagination';
	import 'swiper/css/navigation';

	// import required modules
	import { Pagination, Navigation } from 'swiper';
	export let experience = [
		{
			Title: 'Software Developer Intern',
			Company: ' OssKin',
			Location: 'Montrael, QC',
			Dates: 'May 2022 - ongoing',
			src: 'https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/5a/78/be/5a78be67-2acb-198e-d77b-5c97e710fa1f/source/512x512bb.jpg',
			alt: 'Osskin Logo',
			description:
			[
				"3D modelling software that aims to mass customize 3D orthotics to specific patients’ anatomies. ",
				"Mesh preparation preprocessing of the 3D scan of the anatomy to be used in the software.",
				"Orthotic customization to model the orthotic with mathematical representations such as curves, splines, surfaces and meshes",
				"Helped transition from C# to C++"

			],
			link: 'https://www.osskin.com/'
		},
		{
			Title: 'Unity Developer Intern',
			Company: 'BMS Labs',
			Location: 'Netherlands, Enschede',
			Dates: 'Sept 2020 - Sept 2021',
			src: './BMS.jpg',
			alt: 'BMS Labs Logo',
			description:[
				"Took part in development life cycle of multiple Unity applications, mainly focused on VR/AR apps, from concept to production.",
				"Worked on a variety of hardware including EEG, HoloLens, Multiple VR Headsets, and Holographic Displays.",
				"Also worked on a variety of other projects including Web and text-based games.",
				"Developed custom shaders and extensions for Unity's built-in rendering pipeline and editor.",
			],
			link: 'https://bmslab.utwente.nl/'
		},
		{
			Title: 'Software Developer Intern',
			Company: 'Ravico Analytics',
			Location: 'Toronto, ON',
			Dates: 'May 2020 - Sept 2020',
			src: './Ravico.png',
			alt: 'Ravico Analytics Logo',
			description: ['Practiced Agile Methodology to develop a labratory informatics system in a progressive manner.',
			'Designed UI using Adobe XD and implemented in React.js.',
			'Developed and Maintained serverless web-app using AWS cloud functions.',
			'Collaborated with other developers using git.'
			],
			link: 'https://www.linkedin.com/company/ravico-analytics/'
		},
		{
			Title: 'Peer Advisor',
			Company: 'Lassonde school of engineering',
			Location: 'Toronto, ON',
			Dates: 'May 2020 - Sept 2020',
			src: './Lassonde.png',
			alt: 'Lassonde Logo',
			description:['Worked in collabration with the advising team in Lassonde assisting 20+ students per day.',
						'Prepared and delivered multiple presentations for over 200 students.',
						"Analayzed and curated documents, and road-maps for engineering programs offered at York University.",
						'Facilated and orginized orentation sessions for students.'
						],
			link: 'https://lassonde.yorku.ca/'
		}
	];
</script>

<section>
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
							<a href="{e.link}" target="_blank">
								<i class="fas fa-link"></i>
							</a>
						</div>
					</div>
					
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
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
		padding: .5rem;
		display: flex;
		align-items: center;
		.media{
			width: 30%;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-left: 20px;
			.image{
				border-radius: 5px;
				height: 60%;
				width: auto;
			}
		}
		.content{
			width: 70%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			color:white;
			opacity: .83;
			padding: 1rem;
			.h3{
				font-size: $font2L;
				font-weight: 500;
				font-family: $primaryFont;
				margin: 0;
				padding: 0;
				text-align: left;
			}
			.h4{
				font-size: $fontXL;
				font-weight: 500;
				font-family: $primaryFont;
				margin-bottom: 0.5rem;
				margin:1rem 0 ;
				padding: 0;
				text-align: left;
			}
			.experience-info{
				display: flex;
				justify-content: space-between;
				p{
					font-size: $fontR1;
					margin-bottom: 0.5rem;
					color: white !important;
					font-family: $secondaryFont;
					font-weight: bold;
					
				}
			}
			ul{
				text-align: left;
				margin: 0 0.5rem ;
				padding: 0 0;
				.description{
					margin: 0 0 8px 0;
					padding: 0;
					font-size: $fontR1;
					font-family: $secondaryFont;
					font-weight: normal;
					color:white;
				}
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
	}

</style>
