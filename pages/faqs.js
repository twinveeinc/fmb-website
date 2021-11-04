import Link from 'next/dist/client/link'
import Layout from '../src/layout/Layout'

const faqs = () => {
	return (
		<Layout
			navLight
			whiteLogo
			btnCustomHover='btn btn-skyblue tra-white-hover last-link'
			singlePage
		>
			<div id='faqs-page' className='page-hero-section division'>
				<div className='page-hero-overlay division'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className='col-lg-10 col-xl-8'>
								<div className='hero-txt text-center white-gray'>
									{/* Title */}
									<h2 className='h2-xs p-5'>
										Frequently Asked Questions
									</h2>
									{/* Text */}
								</div>
							</div>
						</div>{' '}
						{/* End row */}
					</div>{' '}
					{/* End container */}
				</div>{' '}
				{/* End hero-overlay */}
				{/* WAVE SHAPE BOTTOM */}
				<div className='wave-shape-bottom'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 1440 80'
					>
						<path
							fill='#ffffff'
							fillOpacity={1}
							d='M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z'
						/>
					</svg>
				</div>
			</div>{' '}
			{/* END PAGE HERO */}
			{/* FAQs-2
			============================================= */}
			<section id='faqs-2' className='wide-60 faqs-section division'>
				<div className='container'>
					{/* FAQs-2 QUESTIONS */}
					<div className='faqs-2-questions'>
						<div className='row row-cols-1 row-cols-lg-2'>
							{/* QUESTIONS HOLDER */}
							<div className='col'>
								<div className='questions-holder pr-15'>
									{/* QUESTION #1 */}
									<div className='question wow fadeInUp'>
										{/* Question */}
										<h5 className='h5-md'>
											Is there a minimum repair charge for
											a mobile visit?
										</h5>
										{/* Answer */}
										<p className='p-lg'>
											YES! Fix My Boat has a minimum
											service charge of between $95-$149
											depending on your zip/postal code.
										</p>
									</div>
									{/* QUESTION #2 */}
									<div className='question wow fadeInUp'>
										{/* Question */}
										<h5 className='h5-md'>
											What type of boats do you service?
										</h5>
										{/* Answer */}
										<p className='p-lg'>
											Fix My Boat is a full-service Marine
											repair shop, equipped with all the
											tools and technical expertise to
											service every kind of boat.
											obviously, a mobile repair shop
											cannot carry every part for every
											boat. You will have access to online
											ordering with 1-2 day delivery for
											parts you do not stock.
										</p>
									</div>
									{/* QUESTION #3 */}
									<div className='question wow fadeInUp'>
										{/* Question */}
										<h5 className='h5-md'>
											Where do you service my boat?
										</h5>
										{/* Answer */}

										<p className='p-lg'>
											Most all services can be performed
											on site, at the dock, marina or at
											your home if the boat is trailered.
											Simply, schedule your service and
											your Fix MY Boat mobile service
											shops are fully equipped with all
											the tools, parts, compressor, and
											wash tanks needed to fix your boat
											back to health.
										</p>
									</div>
									{/* QUESTION #4 */}
									<div className='question wow fadeInUp'>
										{/* Question */}
										<h5 className='h5-md'>
											Does Fix My Boat have a no contact
											option for service?
										</h5>
										{/* Answer */}

										<p className='p-lg'>
											Yes, Fix My Boat is set up to
											perform no-contact, no-touch
											services! The technician will text
											you when they are on the away to
											your boat and when they arrive.
											Grant access to the boat, marina,
											dock or yard, the technician will
											complete the service or repair and
											text you when completed. We will
											send you an invoice via email for
											payment.
										</p>
									</div>
									{/* QUESTION #5 */}
									<div className='question wow fadeInUp'>
										{/* Question */}
										<h5 className='h5-md'>
											How do I book my boat service?
										</h5>
										{/* Answer */}

										<p className='p-lg'>
											Booking your service online is the
											easiest way to gain access to all
											Fix My Boat services. Click Book
											Now, enter your postal/zip code,
											select a service, pick a time and
											you’re done!
										</p>
									</div>
								</div>
							</div>{' '}
							{/* END QUESTIONS HOLDER */}
							{/* QUESTIONS HOLDER */}
							<div className='col'>
								<div className='questions-holder pl-15'>
									{/* QUESTION #6 */}
									<div className='question wow fadeInUp'>
										{/* Question */}
										<h5 className='h5-md'>
											Is my boat insured while you are
											working on it?
										</h5>
										{/* Answer */}
										<p className='p-lg'>
											Yes, Fix My Boat has full insurance
											coverage for each technician that is
											working on your boat or in the
											technician’s possession during a
											possible sea trial.
										</p>
									</div>
									{/* QUESTION #5 */}
									<div className='question wow fadeInUp'>
										{/* Question */}
										<h5 className='h5-md'>
											You state you have a 100% guarantee
											for your service work done?
										</h5>
										{/* Answer */}
										<p className='p-lg'>
											Yes, if you are not 100% satisfied
											with the repair or service, please
											tell us and we will make it right.
											Our goal is to build loyalty and
											long-term relationships with
											customers, boat dealers and all boat
											manufactures through our quality
											level of repair and service.
											Integrity, work product and
											transparency is our Goal. In saying
											this, we do not provide a guarantee
											for any boat that was service more
											than thirty (30) days prior to the
											date of follow up request.
										</p>
									</div>
									{/* QUESTION #6 */}
									<div className='question wow fadeInUp'>
										{/* Question */}
										<h5 className='h5-md'>
											Do you sea trial or test ride my
											boat after the service?
										</h5>
										{/* Answer */}

										<p className='p-lg'>
											Yes, but only with your permission.
											All Boats will be tested by our
											certified expert mechanics before
											your service is deemed complete. We
											also encourage customers to test
											their own boats and make sure
											they’re 100% happy before we leave.
										</p>
									</div>
									{/* QUESTION #7 */}
									<div className='question wow fadeInUp'>
										{/* Question */}
										<h5 className='h5-md'>
											Your service packages only include
											labor, how much will parts cost?
										</h5>
										{/* Answer */}

										<p className='p-lg'>
											The cost of parts are determined by
											what is required for your Boat. Our
											certified mechanics will walk you
											through any parts needed BEFORE the
											service so you are educated and
											informed on what is needed. We stock
											an array of parts in order to make
											sure you leave the service ready and
											raring to go.
										</p>
									</div>
									{/* QUESTION #8 */}
									<div className='question wow fadeInUp'>
										{/* Question */}
										<h5 className='h5-md'>
											How long does a service or repair
											take?
										</h5>
										{/* Answer */}

										<p className='p-lg'>
											Service and repair time is based on
											the work required. Depending on the
											level of repair, our technicians
											have been trained to be proficient,
											skilled and clean when working on
											your boat. You are invited to stay
											and watch, chat with your mechanic,
											and enjoy a coffee while we work
											your boat. Please keep in mind, we
											also recommend during the COVID
											period our no contact service.
										</p>
									</div>
								</div>
							</div>{' '}
							{/* END QUESTIONS HOLDER */}
						</div>{' '}
						{/* End row */}
					</div>{' '}
					{/* END FAQs-2 QUESTIONS */}
					{/* MORE QUESTIONS BUTTON */}
					<div className='row'>
						<div className='col'>
							<div className='more-questions'>
								<h5 className='h2-xl'>
									Have a Boat Repair Question?
								</h5>
								<a href='/contacts'>
									Get your boat-related questions answered by
									a certified Fix My Boat mechanic.
								</a>
							</div>
						</div>
					</div>
				</div>{' '}
				{/* End container */}
			</section>
			{/* END FAQs-2 */}
			{/* CALL TO ACTION-7
      ============================================= */}
			<div> TEST</div>
			<div id='cta-7' className='cta-section division'>
				<div className='container'>
					<div className='cta-7-wrapper bg-snow'>
						<div className='row d-flex align-items-center'>
							{/* TEXT */}
							<div className='col-lg-9'>
								<div className='cta-7-txt'>
									<p className='p-xl'>
										{`Click Book Now, enter your postal/zip code, select a service, pick a time and you’re done!`}
									</p>
								</div>
							</div>

							{/* BUTTON */}
							<div className='col-lg-3 text-end'>
								<div className='cta-7-btn'>
									<Link href='https://book.housecallpro.com/book/Fix-My-Boat/771e1f703d06486fb2f339393a20388f?attribution=getstarted'>
										<a className='btn btn-skyblue tra-grey-hover'>
											Book Now
										</a>
									</Link>
								</div>
							</div>
						</div>{' '}
						{/* End row */}
					</div>{' '}
					{/* End cta-7-wrapper */}
				</div>{' '}
				{/* End container */}
			</div>
		</Layout>
	)
}

export default faqs
