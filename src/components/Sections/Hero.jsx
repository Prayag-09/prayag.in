import { CustomButton } from '../buttons/CustomButton';
import Navbar from '../navbar/Navbar';
import profile from '../../assets/images/profile.webp';
import { useRef } from 'react';
import hover3d from '../../utils/hover';
import { motion } from 'framer-motion';
import { headlines } from '../../utils';
import { SocialMediaIcons } from '../ui/SocialMediaIcons';
import AnimatedSubtitle from '../text anim/AnimatedSubtitle';
import AnimatedTitle from '../text anim/AnimatedTitle';
import { animateScroll } from 'react-scroll';

const Hero = () => {
	// Use the 'useRef' hook to reference the hero section
	const hero = useRef(null);

	// Applying hover effect for the hero section
	const hoverHero = hover3d(hero, {
		x: 30, // Movement on the x-axis (horizontal)
		y: -40, // Movement on the y-axis (vertical)
		z: 30, // 3D depth movement
	});

	// Applying hover effect for the image (profile)
	const imageHover = hover3d(hero, {
		x: 20, // Movement on the x-axis (horizontal)
		y: -5, // Movement on the y-axis (vertical)
		z: 11, // 3D depth movement
	});

	// Function to scroll to the bottom of the page (Contact section)
	const scrollToContact = () => {
		animateScroll.scrollToBottom(); // Smooth scroll to bottom
	};

	return (
		<div className='bg-primary bg-grid-small-white/[0.2]' id='home'>
			{/* Navbar Component */}
			<Navbar />

			{/* Hero Section */}
			<section ref={hero}>
				<div className='relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8'>
					{/* Social Media Icons */}
					<SocialMediaIcons />

					{/* Info Section (Text and Profile Image) */}
					<div className='space-y-2 max-w-4xl mx-auto'>
						{/* Title and Subtitle */}
						<div className='flex justify-between'>
							<div>
								{/* Animated Title */}
								<AnimatedTitle
									text={headlines[0]} // First headline from 'headlines' array
									className='text-4xl font-extrabold mx-auto md:text-5xl text-primary-text'
									color={true} // Boolean to change color if true
								/>

								{/* Animated Subtitle */}
								<AnimatedSubtitle
									text={headlines[1]} // Second headline from 'headlines' array
									className='text-secondary-text text-2xl md:text-3xl mx-auto font-bold break-words'
								/>
							</div>

							{/* Profile Image */}
							<motion.div
								initial={{
									opacity: 0, // Initially invisible
									scale: 0, // Initially scaled down to 0
								}}
								animate={{
									opacity: 1, // Animate to visible
									scale: 1, // Animate to normal size
									transition: {
										duration: 1, // Animation duration
									},
								}}
								className='hidden md:block' // Hide on small screens
								style={{
									transform: hoverHero.transform, // Apply 3D hover effect
								}}>
								{/* Profile Image */}
								<img
									src={profile} // Profile image source
									alt='Profile'
									className='rounded-full border-2 border-secondary' // Rounded and styled border
									style={{
										transform: imageHover.transform, // Apply hover effect for image
									}}
								/>
							</motion.div>
						</div>

						{/* Description */}
						<motion.p
							initial={{ opacity: 0, y: 20 }} // Initially invisible and slightly down
							animate={{
								opacity: 1, // Animate to visible
								y: 0, // Animate back to normal vertical position
								transition: {
									delay: 0.6, // Delay before the animation starts
								},
							}}
							className='text-secondary-text text-xl pb-4'>
							{headlines[2]} {/* Display third headline from 'headlines' */}
						</motion.p>

						{/* Custom Button (Get in Touch) */}
						<CustomButton
							label={'Get in Touch'} // Label for the button
							onClick={scrollToContact} // Action to scroll to contact section
							svg={
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
									fill='currentColor'
									className='w-5 h-5'>
									<path
										fillRule='evenodd'
										d='M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z'
										clipRule='evenodd'
									/>
								</svg>
							}
						/>
					</div>
				</div>

				{/* Background Decoration */}
				<div
					className='absolute inset-0 ml-36 mt-44 max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg'
					style={{
						background:
							'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)', // Background gradient style
					}}></div>
			</section>
		</div>
	);
};

export default Hero;
