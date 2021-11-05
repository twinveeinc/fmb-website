const Hero1 = () => {
	return (
		<section id='' className='hero-home-container '>
			<div className='container-hero'>
				<div className='container-hero-wrapper'>
					<div className='col-12  hero-left'>
						<div className='hero-mobile-cta'>
							<h1>On Demand Mobile Boat Repair</h1>
							<p className='p-lg storm-color text-center'>
								At your Home, Dockside, or Marina Fast,
								Friendly, and Fair Service
							</p>
							<button type='button' class='btn bg-primary  mt-10'>
								<a href='https://book.housecallpro.com/book/Fix-My-Boat/771e1f703d06486fb2f339393a20388f?attribution=getstarted'>
									Book Now
								</a>
							</button>
						</div>
						{/* <div className='col-md-7 col-lg-6 order-first  order-md-2'>
							<div className='hero-2-txt storm-color wow fadeInLeft'>
								<h2 className='tagline'>
									On Demand Mobile Boat Repair
								</h2>

								<p className='p-lg storm-color'>
									At your Home, Dockside, or Marina Fast,
									Friendly, and Fair Service
								</p>

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
						</div> */}
					</div>
					<div className='col-12 col-lg-6 hero-right'>
						<div className='hero-phone-wrapper wow fadeInRight pt-5 '>
							<img
								className='img-fluid hero-phone-mockup'
								src='/images/phone-mock.png'
								alt='hero-image'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero1
