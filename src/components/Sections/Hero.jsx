import CustomButton from '../Buttons/CustomButton.jsx';
import NavBar from '../Navbar/Navbar.jsx';
import profile from '/assets/images/profile.jpg';
import { useRef, useEffect, useState } from 'react';
import hover3d from '../../utils/hover';
import { motion } from 'framer-motion';
import { headlines } from '../../utils/static.js';
import { SocialMediaIcons } from '../ui/SocialMediaIcons.jsx';
import AnimatedSubtitle from '../Animation/AnimatedSubtitle';
import AnimatedTitle from '../Animation/AnimatedTitle';
import { animateScroll } from 'react-scroll';
import DownloadResume from './DownloadResume.jsx';

const Hero = () => {
	const hero = useRef(null);
	const [offsetY, setOffsetY] = useState(0);

	// Parallax Effect on Scroll
	const handleScroll = () => {
		setOffsetY(window.scrollY * 0.2);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const hoverHero = hover3d(hero, { x: 30, y: -40, z: 30 });
	const imageHover = hover3d(hero, { x: 20, y: -5, z: 11 });

	const scrollToContact = () => animateScroll.scrollToBottom();

	return (
		<div
			className='bg-primary bg-grid-small-white/[0.2] dark:bg-gray-900'
			id='home'>
			<NavBar />
			<section ref={hero}>
				<div className='relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8'>
					<SocialMediaIcons />
					<div className='space-y-6 max-w-4xl mx-auto text-center md:text-left'>
						<div className='flex flex-col md:flex-row justify-between items-center'>
							<div>
								<AnimatedTitle
									text={headlines[0]}
									className='text-4xl font-extrabold mx-auto md:text-5xl text-primary-text dark:text-white'
									color={true}
								/>
								<AnimatedSubtitle
									text={headlines[1]}
									className='text-secondary-text dark:text-gray-300 text-2xl md:text-3xl mx-auto font-bold break-words'
								/>
							</div>

							{/* Profile Image with Hover Effect & Parallax */}
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
								className='mt-6 md:mt-0'
								style={{
									transform: hoverHero.transform,
									transformOrigin: 'center',
								}}>
								<img
									src={profile}
									alt='Prayag - Software Developer'
									loading='lazy'
									className='w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-transparent bg-gradient-to-r from-purple-500 to-blue-500 p-1 shadow-lg transform transition-all duration-300 hover:scale-105'
									style={{
										transform: `${imageHover.transform} translateY(${offsetY}px)`,
									}}
								/>
							</motion.div>
						</div>

						{/* Subtitle & Call to Action */}
						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
							className='text-secondary-text dark:text-gray-400 text-xl pb-4'>
							{headlines[2]}
						</motion.p>

						<div className='mt-6 flex flex-col md:flex-row items-center gap-4'>
							<DownloadResume />
							<CustomButton
								label={'Get in Touch'}
								onClick={scrollToContact}
								svg={
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
										fill='currentColor'
										className='w-5 h-5'>
										<path
											fillRule='evenodd'
											d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
											clipRule='evenodd'
										/>
									</svg>
								}
							/>
						</div>
					</div>
				</div>

				{/* Animated Background */}
				<div
					className='absolute inset-0 ml-36 mt-44 max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg'
					style={{
						background:
							'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
						animation: 'fadeIn 2s ease-in-out',
					}}></div>
			</section>
		</div>
	);
};

export default Hero;
