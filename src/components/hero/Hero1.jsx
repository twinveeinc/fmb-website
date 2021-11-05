const Hero1 = () => {
	return (
		<section id='' className='hero-home-container '>
			<div className='container-hero'>
				<div className=' container container-hero-wrapper'>
					<div className='col-12 col-lg-6 hero-left'>
						<div className='hero-mobile-cta 	'>
							<div className='wow fadeIn'>
								<h1>On Demand Mobile Boat Repair</h1>
								<p className=' storm-color '>
									At your Home, Dockside, or Marina Fast,
									Friendly, and Fair Service
								</p>
							</div>
							<div className='wow slideInUp'>
								<button
									type='button'
									class='btn bg-primary   mt-10'
								>
									<a href='https://book.housecallpro.com/book/Fix-My-Boat/771e1f703d06486fb2f339393a20388f?attribution=getstarted'>
										Book Now
									</a>
								</button>
							</div>
						</div>
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
