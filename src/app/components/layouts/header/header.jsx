import styles from './header.module.scss'

const Header = ({ children }) => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.wrapper}>{children}</div>
			</div>
		</header>
	)
}

export default Header
