const Footer = () => {
	return (
		<footer className='bg-primary py-6'>
			<div className='max-w-4xl mx-auto px-6 md:px-8 text-center'>
				<div className='flex flex-col items-center gap-2 md:flex-row md:justify-between'>
					{/* <NowPlaying /> */}
					<p>Spotify Music Here</p>
					<p className='text-secondary font-medium'>
						© 2025 Tushar Prayag | All Rights Reserved
					</p>
				</div>
				<p className='text-secondary font-light text-sm mt-2'>
					Made with ❤️ in India
				</p>
			</div>
		</footer>
	);
};

export default Footer;
