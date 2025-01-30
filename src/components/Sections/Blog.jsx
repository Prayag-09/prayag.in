import SectionHeader from '../ui/SectionHeader.jsx';
import { blogs } from '../../utils/static.js';
import ArticleCard from '../Cards/ArticleCard';

const Blog = () => {
	return (
		<section className='mt-5 max-w-4xl mx-auto md:px-8' id='blog'>
			<SectionHeader title={'Blog.'} subtitle={'Tech Trends & Reflections'} />

			<div className='flex justify-center items-center mt-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 px-7 md:px-0 gap-5'>
					{blogs.map((article, idx) => (
						<ArticleCard article={article} key={idx} />
					))}
				</div>
			</div>

			<div className='p-6 pt-0 text-center mt-10'>
				<a
					href='https://t-prayag.hashnode.dev/'
					className='align-middle text-center font-medium lowercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-base py-3 px-6 rounded-lg hover:bg-[#6b90bd] text-white shadow-md shadow-gray-900/10 hover:shadow-lg bg-secondary focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
					type='button'>
					see more
				</a>
			</div>
		</section>
	);
};

export default Blog;
