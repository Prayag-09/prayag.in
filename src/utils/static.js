export const headlines = [
	"Hi, I'm T Prayag.",
	"I'm a Software Developer.",
	'I build scalable, high-performance full-stack web applications with a focus on efficiency and user experience.',
];

export const fixedNav = [
	{ name: 'Home' },
	{ name: 'About' },
	{ name: 'Projects' },
	{ name: 'Blog' },
	{ name: 'Contact' },
];

export const projects = [
	{
		title: 'LumaAI',
		image: '/assets/images/luma.png',
		githubLink: 'https://github.com/Prayag-09/LumaAI',
		liveDemo: 'https://youtu.be/fPZUVRJWIIk',
		description:
			'An AI-powered chat application leveraging the Gemini API for real-time conversations, built with Next.js and React for a seamless user experience.',
		techStack: [
			'Next.js',
			'TypeScript',
			'Prisma',
			'Gemini API',
			'ImageKit',
			'Express',
		],
	},
	{
		title: 'Xeon Wallet',
		image: '/assets/images/xeon.png',
		githubLink: 'https://github.com/Prayag-09/XeonWallet',
		liveDemo: 'https://www.youtube.com/watch?v=yN57RFe5GoQ',
		description:
			'A secure and intuitive digital wallet designed for seamless transactions, prioritizing security, simplicity, and scalability.',
		techStack: ['Next.js', 'TypeScript', 'Docker', 'Prisma', 'TailwindCSS'],
	},
	{
		title: 'ForgeStory',
		image: '/assets/images/forge.png',
		githubLink: 'https://github.com/Prayag-09/ForgeStory',
		liveDemo: 'https://forgestory.vercel.app/',
		description:
			'A modern, scalable blogging platform inspired by Medium, leveraging Cloudflare Workers for lightning-fast performance.',
		techStack: ['React', 'Cloudflare', 'HonoJS', 'TailwindCSS'],
	},
	{
		title: 'JobifyX [under development]',
		image: '/assets/images/job.png',
		githubLink: 'https://github.com/Prayag-09/JobifyX-Ultimate-Job-Portal',
		liveDemo: null,
		description:
			'An advanced job portal connecting job seekers and recruiters with real-time updates, powerful search capabilities, and seamless authentication.',
		techStack: ['React', 'Supabase', 'TailwindCSS'],
	},
];

export const skills = [
	'JavaScript',
	'Node.js',
	'React',
	'Express',
	'Java',
	'Tailwind CSS',
	'PostgreSQL',
	'Next.js',
	'MySQL',
	'Docker',
	'AWS',
	'TypeScript',
	'MongoDB',
	'GitHub Actions',
];

export const certificates = ['AWS Cloud Practitioner'];

export const blogs = [
	{
		title: 'How to create a GitHub Actions Workflow?',
		desc: 'Beginner’s Tutorial for Crafting a GitHub Actions Workflow',
		url: 'https://t-prayag.hashnode.dev/tutorial-how-to-create-a-github-actions-workflow',
		image: '/assets/images/workflow.jpg',
	},
	{
		title: 'GitHub Actions',
		desc: `How to Automate Your Workflows on GitHub: A Beginners Guide`,
		url: 'https://t-prayag.hashnode.dev/github-actions',
		image: '/assets/images/actions.jpg',
	},
	{
		title: 'CI / CD using GitHub Actions',
		desc: 'CI/CD Setup with GitHub Actions: A Practical Tutorial',
		url: 'https://t-prayag.hashnode.dev/tutorial-ci-cd-using-github-actions',
		image: '/assets/images/cicd.jpg',
	},
	{
		title: 'ZOD Library: Mastering Input Validation',
		desc: ' A robust input validator',
		url: '	https://t-prayag.hashnode.dev/zod-library-mastering-input-validation',
		image: '/assets/images/zod.jpg',
	},
];
