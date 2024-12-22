import Connect from '../../ui/connect/connect'
import Logo from '../../ui/logo/logo'
import Nav from '../../ui/nav/nav'
import styles from './header.module.scss'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<Logo />
					<Nav />
					<Connect />
				</div>
			</div>
		</header>
	)
}

export default Header
