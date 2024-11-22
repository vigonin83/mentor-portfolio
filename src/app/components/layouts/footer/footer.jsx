import styles from './footer.module.scss'

const Footer = ({ children }) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				{children}
			</div>
		</footer>
	)
}

export default Footer
