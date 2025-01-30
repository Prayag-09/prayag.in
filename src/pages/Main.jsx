import Hero from '../components/Sections/Hero.jsx';
import About from '../components/Sections/About.jsx';
import Projects from '../components/Sections/Projects.jsx';
import Contact from '../components/Sections/Contact.jsx';
import Blog from '../components/Sections/Blog.jsx';
import Footer from '../components/Sections/Footer.jsx';
const Main = () => {
	return (
		<div>
			<Hero />
			<About />
			<Projects />
			<Blog />
			<Contact />
			<Footer />
		</div>
	);
};

export default Main;
