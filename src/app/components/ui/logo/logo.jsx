'use client'
import { motion } from 'motion/react'
import Image from 'next/image'
import sign from '../../../../../public/img/sign-logo-original.png'
import word from '../../../../../public/img/word-logo-original.png'
import styles from './logo.module.scss'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link
			href='/'
			className={styles.wrapper}
		>
			<motion.span animate={{ rotate: 360 } } transition={{type: 'spring', stiffness: 200, damping: 24, mass: 4.8 ,  rotateZ: 360, opacity: 1 }}>
				<Image
					src={sign}
					width={40}
					alt='логотип'
				/>
			</motion.span>
			<Image
				src={word}
				width={70}
				alt='логотип'
			/>
		</Link>
	)
}

export default Logo
