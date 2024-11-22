import styles from './copyright.module.scss'

const Copyright = () => {
	const currentYear = new Date().getFullYear()

	return (
		<div className={styles.copyright}>
			<span>©</span> <span>{currentYear} </span>
			<span>
				Разработано{' '}
				<a
					href='#'
					className={styles.link}
				>
					web4you
				</a>
			</span>
		</div>
	)
}

export default Copyright
