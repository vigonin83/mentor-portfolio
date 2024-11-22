import Image from 'next/image'
import logo from '../../../../../public/img/word-logo-original.png'

const Logo = () => {
	return (
		<a href='/'>
			<Image
				src={logo}
				width={100}
				alt='логотип'
			/>
		</a>
	)
}

export default Logo
