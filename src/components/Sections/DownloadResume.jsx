import CustomButton from '../Buttons/CustomButton';

const DownloadResume = () => {
	return (
		<div className='flex justify-center items-center'>
			<a href='/assets/resume/Prayag Resume.pdf' download='Prayag Resume.pdf'>
				<CustomButton label='Resume' />
			</a>
		</div>
	);
};

export default DownloadResume;
