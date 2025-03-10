import FramerMagnetic from './FramerMagnetic';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaHashnode } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

export const SocialMediaIcons = () => {
	const staggerVariants = {
		hidden: { opacity: 0, y: -20 },
		visible: (i) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: i * 0.2,
			},
		}),
	};

	return (
		<div className='flex gap-8 max-w-4xl mx-auto pb-2'>
			{socialMediaLinks.map((link, index) => (
				<motion.div
					key={index}
					custom={index}
					variants={staggerVariants}
					initial='hidden'
					animate='visible'>
					<FramerMagnetic>
						<Link to={link.url}>{link.iconComponent}</Link>
					</FramerMagnetic>
				</motion.div>
			))}
		</div>
	);
};

const socialMediaLinks = [
	{
		url: 'https://www.linkedin.com/in/prayagtushar/',
		iconComponent: (
			<FaLinkedin className='fill-white hover:fill-secondary' size={25} />
		),
	},
	{
		url: 'https://github.com/Prayag-09',
		iconComponent: (
			<FaGithub className='fill-white hover:fill-secondary' size={25} />
		),
	},
	{
		url: 'https://t-prayag.hashnode.dev/',
		iconComponent: (
			<FaHashnode className='fill-white hover:fill-secondary' size={25} />
		),
	},
];
