import Button from 'react-bootstrap/Button'
const Counter = () => {
	return (
		<section
			id='counter-widget'
			className='wide-60 features-section division'
		>
			<div className='container'>{/* END FEATURES-4 WRAPPER */}</div>
			{/* End container */}
			<div className='counter-widget-container'>
				<div className='container '>
					<div className='row row-col lg-d-flex lg-justify-content-center'>
						<div className='col-12 counter-widget-box1 col-lg-4 d-flex flex-column align-items-center'>
							<h2>User Friendly App</h2>
							<span className='test-color'>4.8/5</span>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Rem possimus ullam
							</p>
						</div>
						<div className='col-12 counter-widget-box2 col-lg-4 d-flex flex-column align-items-center test2'>
							<h2>Professional Repairs</h2>
							<span className='test-color'>300 K+</span>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Rem possimus ullam
							</p>
						</div>
						<div className='col-12 counter-widget-box3 col-lg-4 d-flex flex-column align-items-center test3'>
							<h2>Gallons Sold</h2>
							<span className='test-color'>3 M+</span>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Rem possimus ullam
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Counter
