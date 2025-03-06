import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../utils/static.js';
import SectionHeader from '../ui/SectionHeader';

const Projects = () => {
	// Ensure projects exist and have valid data
	if (!projects || projects.length === 0) return null;

	// Default values for missing properties
	const defaultProject = {
		title: 'Untitled Project',
		description: 'No description available.',
		techStack: [],
		image: '',
		githubLink: '',
		liveDemo: '',
	};

	return (
		<section className='mt-5 max-w-4xl mx-auto md:px-8' id='projects'>
			<SectionHeader title='Projects.' subtitle='Most recent works' />

			<div className='grid grid-cols-1 md:grid-cols-2 px-5 md:px-0 gap-5'>
				{projects.map((project, index) => (
					<ProjectCard
						project={{ ...defaultProject, ...project }}
						key={index}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;
