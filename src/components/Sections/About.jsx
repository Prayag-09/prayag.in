import { skills, certificates } from '../../utils/static.js';
import StackSkills from '../ui/StackSkills.jsx';
import { FaCode } from 'react-icons/fa6';
import { TbCertificate } from 'react-icons/tb';
import SectionHeader from '../ui/SectionHeader.jsx';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Tooltip from '../ui/Tooltip.jsx';
import transition from '/assets/images/transition.png';

const About = () => {
	const control = useAnimation();
	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

	const containerVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	};

	useEffect(() => {
		if (inView) control.start('visible');
		else control.start('hidden');
	}, [control, inView]);

	return (
		<section className='mt-10 py-16 max-w-5xl mx-auto md:px-10' id='about'>
			<SectionHeader
				title='About Me.'
				subtitle='Skills, Experience & Passion'
			/>

			<div ref={ref} className='flex flex-col md:flex-row gap-12 px-6 md:px-0'>
				{/* Left: About Content */}
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={control}
					className='flex-1 text-base leading-relaxed text-secondary space-y-6'>
					<p className='text-lg'>
						Hey there! I&apos;m{' '}
						<span className='font-semibold text-white'>Prayag</span>, a
						passionate software developer from India. My expertise lies in
						backend development, particularly with{' '}
						<span className='text-white font-semibold'>
							Node.js, Express.js, and TypeScript
						</span>
						. However, I&apos;m also well-versed in frontend technologies,
						making me a well-rounded full-stack developer.
					</p>

					<div>
						Currently, I&apos;m working as an{' '}
						<span className='font-medium text-white'>SDE Intern</span> at{' '}
						<span className='text-white font-extrabold'>
							<Tooltip
								name={<span className='text-gray-500'>Zerone Consulting</span>}
								path='https://www.zerone-consulting.com/'
								image={transition}
							/>
						</span>{' '}
						where I contribute to building robust and scalable solutions.
					</div>

					<div>
						Beyond coding, I have a strong passion for sports—I enjoy playing{' '}
						<span className='text-white'>Basketball, Football, and Chess</span>.
						These help me stay sharp and think strategically, just like in
						development!
					</div>

					<div className='text-lg font-medium text-white flex items-center gap-2'>
						<p>Open to New Opportunities!</p>
					</div>
					<p>
						I&apos;m actively seeking exciting opportunities where I can
						leverage my skills to build impactful solutions. If you&apos;re
						looking for a dedicated developer who loves solving challenging
						problems,
						<p className='text-white'>Let&apos;s Connect!</p>
					</p>
				</motion.div>

				{/* Right: Skills & Certifications */}
				<div className='flex-1 space-y-6 border-2 border-rounded-xl border-gray-800 p-6 rounded-lg shadow-lg'>
					<StackSkills
						title='Programming & Tools'
						list={skills}
						icon={<FaCode color='#6366f1' />}
					/>

					<StackSkills
						title='Certifications'
						list={certificates}
						icon={<TbCertificate color='#6366f1' />}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
