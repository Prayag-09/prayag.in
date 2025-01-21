import { skills, certificates } from '../../utils/static.js';
import StackSkills from '../ui/StackSkills.jsx';
import { FaCode } from 'react-icons/fa6';
import { TbCertificate } from 'react-icons/tb';
import SectionHeader from '../ui/SectionHeader.jsx';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Tooltip from '../ui/Tooltip.jsx';
import transition from '../../assets/images/transition.png';

const About = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();

	const containerVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8 },
		},
	};

	useEffect(() => {
		if (inView) {
			control.start('visible');
		} else {
			control.start('hidden');
		}
	}, [control, inView]);

	return (
		<section className='mt-5 max-w-4xl mx-auto md:px-8' id='about'>
			<SectionHeader title={'About.'} subtitle={'Skills & Journey'} />

			<div
				className='text-secondary-text md:flex flex-row gap-16 px-4 md:px-0'
				ref={ref}>
				<motion.div
					variants={containerVariants}
					initial='hidden'
					animate={control}
					className='flex-1 text-base'>
					<p className='pb-3'>
						Hey there! I'm Prayag, a software developer based in India. I
						specialize in backend development, particularly using Express.JS,
						Node.JS, and , but I'm also comfortable with various tools and adapt
						to project needs. I also have experience in frontend development.
					</p>

					<div className='pb-3'>
						Currently, I work as SDE Intern for{' '}
						<Tooltip
							name={'Zerone Consulting'}
							path={'https://www.zerone-consulting.com/'}
							image={transition}
						/>{' '}
					</div>

					<div className='pb-3'>
						Outside of the world of code, I'm the guy who enjoys playing
						Basketball, Football and Chess. Each Sunday morning, you can find me
						atexpressing gratitude to God.
					</div>

					<div className='pb-3'>
						I'm looking for new opportunities where I can merge my love for code
						with my love for learning to solve challenging problems. If you have
						an opening that might be a good fit, let's connect and explore the
						possibilities!
					</div>
				</motion.div>

				<div className='flex-1 pt-4 md:pt-0 text-sm'>
					<StackSkills
						title={'Programming & Tools'}
						list={skills}
						icon={<FaCode color='#6366f1' />}
					/>

					<StackSkills
						className='text-sm'
						title={'Certificates'}
						list={certificates}
						icon={<TbCertificate color='#6366f1' />}
					/>
				</div>
			</div>
		</section>
	);
};

export default About;
