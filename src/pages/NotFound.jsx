import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='flex flex-col justify-center items-center h-screen w-full bg-primary text-primary'>
			<h1 className='text-8xl md:text-9xl font-extrabold tracking-widest'>
				404
			</h1>

			<div className='text-xl md:text-2xl bg-secondary px-4 py-2 rounded mt-4 shadow-lg'>
				Page Not Found
			</div>

			<button className='mt-8 group'>
				<Link
					to='/'
					aria-label='Go back to the homepage'
					className='relative inline-block text-lg font-medium text-white group focus:outline-none focus:ring'>
					{/* <span
            className="absolute inset-0 bg-secondary transition-transform transform scale-105 opacity-90 group-hover:scale-100 group-hover:bg-primary"
          >Take me Home</span> */}

					<span
						className='relative block px-8 py-3 bg-secondary text-primary border border-secondary transition-colors 
          duration-300 group-hover:bg-primary group-hover:text-secondary'>
						Take Me Home
					</span>
				</Link>
			</button>
		</div>
	);
};

export default NotFound;
