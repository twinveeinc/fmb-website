import Button from 'react-bootstrap/Button'
import CountUp from 'react-countup'
import {useState, useEffect} from 'react'
const Counter = () => {
	const [count, setCount] = useState()

	useEffect(() => {}, [])

	const startCounter = () => {}
	return (
		<section
			id='counter-widget'
			className='wide-60 features-section division'
		>
			<div className='container'>{/* END FEATURES-4 WRAPPER */}</div>
			{/* End container */}
			<div className='counter-widget-container'>
				<div className='container '>
					<div className='row wow fadeInUp  row-col lg-d-flex lg-justify-content-center '>
						<div className=' col-12 counter-widget-box1 col-lg-4 d-flex flex-column align-items-center'>
							<h2 className='text-volt'>User Friendly App</h2>
							<CountUp
								className='test-color'
								start={0}
								end={4.8}
								duration={2.75}
								separator=' '
								decimals={1}
								decimal='.'
								prefix=''
								suffix='/5'
								delay={0}
							>
								{({countUpRef}) => (
									<div>
										<span ref={countUpRef} />
									</div>
								)}
							</CountUp>

							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Rem possimus ullam
							</p>
						</div>
						<div className='col-12 counter-widget-box2 col-lg-4 d-flex flex-column align-items-center'>
							<h2>Professional Repairs</h2>
							<CountUp
								className='test-color'
								className='test-color'
								start={0}
								end={300}
								duration={2.75}
								separator=' '
								decimals={0}
								decimal='.'
								prefix=''
								suffix='k'
								delay={0}
							>
								{({countUpRef}) => (
									<div>
										<span ref={countUpRef} />
									</div>
								)}
							</CountUp>

							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Rem possimus ullam
							</p>
						</div>
						<div className='col-12 counter-widget-box3 col-lg-4 d-flex flex-column align-items-center'>
							<h2>Gallons Sold</h2>
							<CountUp
								className='test-color'
								start={0}
								end={3}
								duration={1}
								separator=' '
								decimals={0}
								decimal='.'
								prefix=''
								suffix='M+'
								delay={0}
							>
								{({countUpRef}) => (
									<div>
										<span ref={countUpRef} />
									</div>
								)}
							</CountUp>

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
