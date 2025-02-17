import { useEffect, useState } from 'react';
import FloatingNavBar from './FloatingNavBar';
import StaticNavbar from './StaticNavbar';
import { motion } from 'framer-motion';

const NavBar = () => {
	const [isScrolling, setIsScrolling] = useState(false);
	const [isScrollingSmooth, setIsScrollingSmooth] = useState(false);

	const handleScroll = () => {
		// Adjust scroll threshold for smoother scrolling effect
		if (window.scrollY > 20 && !isScrollingSmooth) {
			setIsScrollingSmooth(true);
		} else if (window.scrollY <= 20 && isScrollingSmooth) {
			setIsScrollingSmooth(false);
		}

		// Toggle the visibility of the floating navbar
		if (window.scrollY > 20) {
			setIsScrolling(true);
		} else {
			setIsScrolling(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [isScrollingSmooth]);

	return (
		<>
			<StaticNavbar />
			{/* Use framer-motion for smoother fade-in/fade-out transition */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: isScrollingSmooth ? 1 : 0 }}
				transition={{ duration: 0.3, ease: 'easeOut' }}>
				<FloatingNavBar visible={isScrolling} />
			</motion.div>
		</>
	);
};

export default NavBar;
