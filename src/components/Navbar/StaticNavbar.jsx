import { useState, useEffect } from 'react';
import { fixedNav } from '../../utils/static';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';

const StaticNavbar = () => {
	const [state, setState] = useState(false);
	const controls = useAnimation();

	useEffect(() => {
		// Smooth transition for navbar visibility
		controls.start({ y: 0, opacity: 1, transition: { duration: 0.5 } });

		// Handle click outside to close mobile menu
		const handleClickOutside = (e) => {
			if (!e.target.closest('.menu-btn') && !e.target.closest('.menu-items')) {
				setState(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, [controls]);

	// NameLogo component for the navbar
	const NameLogo = () => (
		<div className='flex items-center justify-between py-5 md:block'>
			<Link to='home' smooth={true} duration={500} className='flex gap-1 group'>
				<span className='font-bold text-[1.1rem] text-white group-hover:text-secondary group-hover:scale-110 group-hover:underline group-hover:tracking-wider transition-all duration-300 ease-in-out transform hover:text-blue-400 hover:scale-105'>
					prayag
				</span>
			</Link>

			<div className='md:hidden'>
				<button
					className='menu-btn text-gray-400 hover:text-gray-300'
					onClick={() => setState(!state)}
					aria-label={state ? 'Close menu' : 'Open menu'}>
					{state ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 transform rotate-180'
							viewBox='0 0 20 20'
							fill='currentColor'>
							<path
								fillRule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
							/>
						</svg>
					)}
				</button>
			</div>
		</div>
	);

	return (
		<motion.header animate={controls} initial={{ y: -100, opacity: 0 }}>
			<nav
				className={`pb-1 md:text-sm mx-auto md:px-48 ${
					state
						? 'absolute z-20 top-0 inset-x-0 bg-primary rounded-xl mx-2 mt-0 md:mx-0 md:mt-0 md:relative md:bg-transparent pb-4'
						: ''
				}`}>
				<div className='gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8'>
					<NameLogo />

					<div
						className={`flex-1 items-center mt-8 md:mt-0 md:flex ${
							state ? 'block' : 'hidden'
						} menu-items`}>
						<ul className='flex-1 text-xl justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
							{fixedNav.map((navItem, idx) => (
								<motion.li
									key={idx}
									className='text-white font-semibold group transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-secondary'>
									<Link
										to={navItem.name.toLowerCase()}
										smooth={true}
										duration={500}
										spy={true}
										offset={-50}
										activeClass='active'
										className='block cursor-pointer'>
										{navItem.name}
									</Link>
								</motion.li>
							))}
						</ul>
					</div>
				</div>
			</nav>
		</motion.header>
	);
};

export default StaticNavbar;
