import styles from './whiteButton.module.scss'

const WhiteButton = ({ children, isLink, view, radius, size }) => {
	return isLink ? (
		<a
			className={styles.button}
			href=''
		>
			{children}
		</a>
	) : (
		<button className={styles.button}>{children}</button>
	)
}

export default WhiteButton
