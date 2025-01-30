/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const DirectionAwareHover = ({
	imageUrl,
	imageClassName = '',
	className = '',
}) => {
	const ref = useRef(null);
	const [direction, setDirection] = useState('left');

	const handleMouseEnter = (event) => {
		if (!ref.current) return;
		const direction = getDirection(event, ref.current);
		setDirection(['top', 'right', 'bottom', 'left'][direction] || 'left');
	};

	const getDirection = (ev, obj) => {
		const { width: w, height: h, left, top } = obj.getBoundingClientRect();
		const x = ev.clientX - left - w / 2;
		const y = ev.clientY - top - h / 2;
		return Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
	};

	return (
		<motion.div
			onMouseEnter={handleMouseEnter}
			ref={ref}
			className={`relative w-full h-full rounded-lg overflow-hidden bg-transparent ${className}`}>
			<AnimatePresence mode='wait'>
				<motion.div
					className='relative w-full h-full'
					initial='initial'
					whileHover={direction}
					exit='exit'>
					<motion.div className='hidden absolute inset-0 w-full h-full bg-black/40 group-hover:block transition duration-500 z-10' />
					<motion.div
						variants={variants}
						className='relative w-full h-full bg-gray-50 dark:bg-black'
						transition={{ duration: 0.2, ease: 'easeOut' }}>
						<img
							alt='article'
							className={`w-full h-full object-cover ${imageClassName}`}
							src={imageUrl}
						/>
					</motion.div>
				</motion.div>
			</AnimatePresence>
		</motion.div>
	);
};

const variants = {
	initial: { x: 0, y: 0 },
	exit: { x: 0, y: 0 },
	top: { y: -20 },
	bottom: { y: 20 },
	left: { x: -20 },
	right: { x: 20 },
};
