import { useEffect, useState } from 'react';
import FloatingNavBar from './FloatingNavBar';
import StaticNavbar from './StaticNavbar';

const NavBar = () => {
	const [isScrolling, setIsScrolling] = useState(false);

	const handleScroll = () => {
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
	}, []);

	return (
		<>
			<StaticNavbar />
			<FloatingNavBar visible={isScrolling} />
		</>
	);
};

export default NavBar;
