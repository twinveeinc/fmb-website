import React from 'react'
import {
	BsFillArchiveFill,
	BsFillBagCheckFill,
	BsFillChatLeftDotsFill,
	BsFillCreditCardFill,
} from 'react-icons/bs'

// const myLoader = ({src, width, quality}) => {
// 	return `https://localhost:3000/${src}?w=${width}&q=${quality || 75}`
// }

function AppFeatures() {
	return (
		<div className='bg-black appfeature-main-wrapper '>
			<div className='appfeature-main  container '>
				<div className='appfeature-left wow fadeInLeft'>
					<div className='appfeature-box '>
						<span>
							<BsFillArchiveFill className='appfeature-icon' />
						</span>
						<h3>Add Multiple Vehicles</h3>
						<p>
							Order gas delivery for one or more of your vehicles
							whenever you need it.
						</p>
					</div>
					<div className='appfeature-box '>
						<span>
							<BsFillBagCheckFill className='appfeature-icon' />
						</span>
						<h3>Add Multiple Vehicles</h3>
						<p>
							Order gas delivery for one or more of your vehicles
							whenever you need it.
						</p>
					</div>
				</div>
				<div className='appfeature-center '>
					<img src='./images/phone-placeholder-mock1.png' alt='' />
				</div>
				<div className='appfeature-right wow fadeInRight'>
					<div className='appfeature-box'>
						<span>
							<BsFillChatLeftDotsFill className='appfeature-icon' />
						</span>
						<h3>Add Multiple Vehicles</h3>
						<p>
							Order gas delivery for one or more of your vehicles
							whenever you need it.
						</p>
					</div>
					<div className='appfeature-box'>
						<span>
							<BsFillCreditCardFill className='appfeature-icon' />
						</span>
						<h3>Add Multiple Vehicles</h3>
						<p>
							Order gas delivery for one or more of your vehicles
							whenever you need it.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AppFeatures
