import emailjs from 'emailjs-com';

export const sendEmail = async (formData) => {
	try {
		const serviceId = 'service_1jbjmka';
		const templateId = 'template_2ilkn3o';
		const publicKey = '8AiVTcyblBcRPbajj';

		const response = await emailjs.send(
			serviceId,
			templateId,
			formData,
			publicKey
		);

		console.log('Email sent successfully:', response);
		return response;
	} catch (error) {
		console.error('Error sending email:', error);
		throw error;
	}
};
