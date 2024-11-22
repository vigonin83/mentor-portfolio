import { FaGithub, FaWhatsapp, FaTelegramPlane, FaRegEnvelope } from 'react-icons/fa'
export const contacts = [
   {
      id: '0001',
      name: 'telegram',
      icon: <FaTelegramPlane fontSize='1.3rem' />,
      link: 'https://t.me/Vigonin83'
   },
	{
		id: '0002',
		name: 'whatsApp',
		icon: <FaWhatsapp fontSize='1.25rem' />,
		link: 'https://api.whatsapp.com/send?phone=79859374708'
	},
	{
		id: '0003',
		name: 'email',
		icon: <FaRegEnvelope fontSize='1.3rem' />,
		link: 'mailto:vigonin83@gmail.com'
	},
	{
		id: '0004',
		name: 'github',
		icon: <FaGithub fontSize='1.1rem' />,
		link: 'https://github.com/vigonin83'
	}
]
