import Link from 'next/link'
import {useEffect, useState} from 'react'
import {scroll} from '../utils/utils'

const Header = ({
	navLight,
	whiteLogo,
	getStartText,
	btnCustomHover,
	navHoverColor,
	singlePage,
}) => {
	useEffect(() => {
		window.addEventListener('scroll', scroll)
	}, [])

	const [toggle, setToggle] = useState(false)
	const [mobileMenuToggle, setMobileMenuToggle] = useState('')

	const toggleFun = () => {
		setToggle(!toggle)
		document.querySelector('body').classList.toggle('wsactive')
	}
	const toggleMenu = value => {
		setMobileMenuToggle(mobileMenuToggle !== value ? value : '')
	}

	return (
		<header
			id='header'
			className={`header tra-menu ${
				navLight ? 'navbar-light' : 'navbar-dark'
			}`}
		>
			<div className='header-wrapper'>
				{/* MOBILE HEADER */}
				<div className='wsmobileheader clearfix'>
					<span className='smllogo'>
						<img
							src='/images/logo/FMB-fullcolor.png'
							alt='mobile-logo'
						/>
					</span>
					<a
						id='wsnavtoggle'
						onClick={() => toggleFun()}
						className='wsanimated-arrow'
					>
						<span />
					</a>
				</div>
				{/* NAVIGATION MENU */}
				<div className='wsmainfull menu clearfix'>
					<div className='wsmainwp clearfix'>
						{/* HEADER LOGO */}
						<div className='desktoplogo'>
							<Link href='/'>
								<a className='logo-black'>
									<img
										src='/images/logo/FMB-fullcolor.png'
										alt='header-logo'
									/>
								</a>
							</Link>
						</div>
						<div className='desktoplogo'>
							<Link href='/'>
								<a className='logo-white'>
									<img
										src={`${
											whiteLogo
												? '/images/logo/FMB-fullcolor.png'
												: '/images/logo/FMB-fullcolor.png'
										}`}
										alt='header-logo'
									/>
								</a>
							</Link>
						</div>
						{/* MAIN MENU */}
						<nav className='wsmenu clearfix'>
							<div
								className='overlapblackbg'
								onClick={() => toggleFun()}
							/>

							<ul
								className={`wsmenu-list ${
									navHoverColor
										? navHoverColor
										: 'nav-skyblue-hover'
								}`}
							>
								{/* SIMPLE NAVIGATION LINK */}
								<li className='nl-simple'>
									<Link
										href={`${
											singlePage ? '/faqs' : '#faqs-2'
										}`}
									>
										Services
									</Link>
								</li>
								{/* SIMPLE NAVIGATION LINK */}
								<li className='nl-simple'>
									<Link
										href={`${
											singlePage
												? '/features'
												: '#features-8'
										}`}
									>
										Locations
									</Link>
								</li>
								{/* SIMPLE NAVIGATION LINK */}
								<li className='nl-simple'>
									<Link
										href={`${
											singlePage ? '/faqs' : '#faqs-2'
										}`}
									>
										Start a Franchise
									</Link>
								</li>
								{/* SIMPLE NAVIGATION LINK */}
								<li className='nl-simple'>
									<Link href='/'>Contact</Link>
								</li>
								{/* SIMPLE NAVIGATION LINK */}
								<li className='nl-simple'>
									<Link
										href={`${
											singlePage ? '/faqs' : '/faqs'
										}`}
									>
										FAQs
									</Link>
								</li>
								<li>
									<span
										className={`wsmenu-click ${
											mobileMenuToggle === 'about'
												? 'ws-activearrow'
												: ''
										}`}
										onClick={() => toggleMenu('about')}
									>
										<i className='wsmenu-arrow' />
									</span>
									<Link
										href={`${singlePage ? '/about' : '#'}`}
									>
										<a>
											About{' '}
											{!singlePage && (
												<span className='wsarrow' />
											)}
										</a>
									</Link>
									{!singlePage && (
										<ul
											className='sub-menu'
											style={{
												display:
													mobileMenuToggle === 'about'
														? 'block'
														: '',
											}}
										>
											<li>
												<Link href='#content-2'>
													Why Fix My Boat?
												</Link>
											</li>
											<li>
												<Link href='#content-5'>
													Sign Up
												</Link>
											</li>
											<li>
												<Link href='#content-3'>
													Investors
												</Link>
											</li>
											<li>
												<Link href='#content-10'>
													How It Works
												</Link>
											</li>
											<li>
												<Link href='#reviews-1'>
													Testimonials
												</Link>
											</li>
										</ul>
									)}
								</li>
								{/* HEADER BUTTON */}
								<li className='nl-simple'>
									{/* <Link
										href='/book.housecallpro.com/book/Fix-My-Boat/771e1f703d06486fb2f339393a20388f?attribution=getstarted'
										passHref={true}
									> */}
									<a
										href='https://book.housecallpro.com/book/Fix-My-Boat/771e1f703d06486fb2f339393a20388f?attribution=getstarted'
										className={`btn ${
											btnCustomHover
												? btnCustomHover
												: 'btn-tra-white blue-hover'
										} last-link`}
									>
										{getStartText ? 'Book Now' : 'Book Now'}
									</a>
									{/* </Link> */}
								</li>
								{/* HEADER SOCIAL LINKS
								<li class='nl-simple white-color header-socials ico-20 clearfix'>
									<span>
										<Link href='#' class='ico-facebook'>
											<span class='flaticon-facebook'></span>
										</Link>
									</span>
									<span>
										<Link href='#' class='ico-twitter'>
											<span class='flaticon-twitter'></span>
										</Link>
									</span>
									<span>
										<Link href='#' class='ico-instagram'>
											<span class='flaticon-instagram'></span>
										</Link>
									</span>
									<span>
										<Link href='#' class='ico-dribbble'>
											<span class='flaticon-dribbble'></span>
										</Link>
									</span>
								</li> */}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
