const Hero = () => {
	return (
		<section id='hero-2' className='bg-scroll hero-section division'>
			<div className='container  test '>
				<div className='row d-flex align-items-center '>
					{/* HERO TEXT */}
					<div className='col-md-7 col-lg-6 order-first  order-md-2'>
						<div className='hero-2-txt white-color wow fadeInLeft'>
							{/* Title */}
							<h2 className='storm-color tagline'>
								On Demand Mobile Boat Repair
							</h2>
							{/* Text */}
							<p className='p-lg storm-color'>
								At your Home, Dockside, or Marina Fast,
								Friendly, and Fair Service
							</p>
							{/* STORE BADGES */}
							<div className='stores-badge'>
								{/* AppStore */}
								{/* <a href='#' className='store'>
									<img
										className='appstore'
										src='/images/appstore.png'
										alt='appstore-badge'
									/>
								</a>
								{/* Google Play */}
								{/* <a href='#' className='store'>
									<img
										className='googleplay'
										src='/images/googleplay.png'
										alt='googleplay-badge'
									/>
								</a>  */}
								{/* Aamazon Market 
                                               <a href="#" class="store">
                                                    <img class="amazon" src="/images/amazon.png" alt="amazon-badge" />
                                               </a>  */}
								{/* Mac AppStore 
                                               <a href="#" class="store">
                                                    <img class="mac-appstore" src="/images/macstore.png" alt="macstore-badge" />
                                               </a> */}
								{/* Microsoft Store  
                                               <a href="#" class="store">
                                                    <img class="microsoft" src="/images/microsoft.png" alt="microsoft-badge" />
                                               </a> */}
							</div>
							{/* END STORE BADGES */}
							{/* Advantages List */}

							<div>
								<button
									type='button'
									class='btn bg-primary mt-10'
								>
									<a href='https://book.housecallpro.com/book/Fix-My-Boat/771e1f703d06486fb2f339393a20388f?attribution=getstarted'>
										Book Now
									</a>
								</button>
							</div>
						</div>
					</div>
					{/* END HERO TEXT */}
					{/* HERO IMAGE */}
					<div className='col-md-5 col-lg-6 order-last order-md-2'>
						<div className='hero-2-img pc-30 wow fadeInRight pt-5 '>
							<img
								className='img-fluid '
								src='/images/phone-mock.png'
								alt='hero-image'
								height='700'
							/>
						</div>
					</div>
				</div>
				{/* End row */}
			</div>
			{/* End container */}
			{/* WAVE SHAPE BOTTOM */}
			{/* <div className='wave-shape-bottom'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 285'>
					<path
						fill='#ffffff'
						fillOpacity={1}
						d='M0,128L80,149.3C160,171,320,213,480,240C640,267,800,277,960,277.3C1120,277,1280,267,1360,261.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z'
					/>
				</svg>
			</div> */}
			<div className='mobile-repair-watermark'>
				<h1 className='d-flex justify-content-center'>MOBILE REPAIR</h1>
			</div>
		</section>
	)
}

export default Hero
