import { useState, useEffect } from 'react';

export default function useHover3d(ref, { x = 0, y = 0, z = 0 }) {
	const [coords, setCoords] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);

	const handleMouseMove = (e) => {
		const { left, top, width, height } = ref.current.getBoundingClientRect();
		const { clientX, clientY } = e;

		const x = ((clientX - left) / width - 0.5) * 2;
		const y = ((clientY - top) / height - 0.5) * 2;
		setCoords({ x, y });
	};

	const handleMouseEnter = () => setIsHovering(true);
	const handleMouseLeave = () => setIsHovering(false);

	useEffect(() => {
		if (!ref.current) return;

		const { current } = ref;
		current.addEventListener('mousemove', handleMouseMove);
		current.addEventListener('mouseenter', handleMouseEnter);
		current.addEventListener('mouseleave', handleMouseLeave);

		return () => {
			current.removeEventListener('mousemove', handleMouseMove);
			current.removeEventListener('mouseenter', handleMouseEnter);
			current.removeEventListener('mouseleave', handleMouseLeave);
		};
	}, [ref]);

	const { x: xCoord, y: yCoord } = coords;

	const xTransform = isHovering ? xCoord * x : 0;
	const yTransform = isHovering ? yCoord * y : 0;
	const zTransform = isHovering ? z : 0;

	const style = {
		transform: `perspective(1000px) rotateX(${yTransform}deg) rotateY(${-xTransform}deg) translateZ(${zTransform}px)`,
		transition: isHovering ? 'none' : 'all 0.5s ease',
	};

	return style;
}
