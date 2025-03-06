/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3DCard';
import { FaGithub } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProjectCard = ({ project = {} }) => {
	const {
		title = 'Project Title',
		description = 'Project description goes here...',
		techStack = [],
		image = '',
		githubLink = '',
		liveDemo = '',
	} = project;
	const ref = useRef(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

	// Function to open links safely
	const openLink = (url) => {
		if (url && url.trim() !== '') {
			window.open(url, '_blank', 'noopener,noreferrer');
		}
	};

	return (
		<motion.div
			ref={ref}
			style={{ scale: scaleProgress, opacity: opacityProgress }}
			className='w-full'>
			<CardContainer>
				<CardBody className='bg-third border border-black/[0.1] w-full lg:w-[24rem] lg:h-auto rounded-xl p-5 flex flex-col overflow-hidden shadow-lg'>
					{/* Project Image - Adjusts to Fit */}
					{image && (
						<CardItem translateZ={90} className='w-full'>
							<img
								src={image}
								alt={title}
								className='h-40 w-full object-cover rounded-lg'
							/>
						</CardItem>
					)}

					{/* Project Title */}
					<CardItem
						translateZ={50}
						className='text-xl font-semibold text-primary-text mt-3'>
						{title}
					</CardItem>

					{/* Project Description - Truncated to Prevent Overflow */}
					<CardItem
						as='p'
						translateZ={60}
						className='text-secondary-text text-base mt-2 line-clamp-3'>
						{description}
					</CardItem>

					{/* Tech Stack */}
					{techStack.length > 0 && (
						<CardItem translateZ={90} className='mt-3'>
							<div className='flex flex-wrap gap-2 text-sm'>
								{techStack.map((tech, index) => (
									<span
										key={index}
										className='px-2 py-1 bg-gray-700 text-white rounded-md hover:bg-secondary'>
										{tech}
									</span>
								))}
							</div>
						</CardItem>
					)}

					{/* Buttons - Fully Responsive */}
					<div className='flex gap-3 mt-4'>
						{liveDemo && liveDemo.trim() !== '' && (
							<button
								onClick={() => openLink(liveDemo)}
								className='flex-1 text-center px-3 py-1 text-sm font-medium text-black bg-white rounded-md hover:bg-gray-200 transition'>
								Live Demo →
							</button>
						)}

						{githubLink && githubLink.trim() !== '' && (
							<button
								onClick={() => openLink(githubLink)}
								className='flex-1 flex items-center justify-center gap-1 text-xs font-medium text-white bg-black px-3 py-1 rounded-md hover:bg-gray-800 transition'>
								<FaGithub className='text-sm' /> GitHub
							</button>
						)}
					</div>
				</CardBody>
			</CardContainer>
		</motion.div>
	);
};

export default ProjectCard;
