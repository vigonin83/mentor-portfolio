import styles from './darkButton.module.scss'

const DarkButton = ({ children, isLink,  view, radius, size }) => {

	return isLink ? (
		<a className={styles.button} href=''>
			<span>{children}</span>
		</a>
	) : (
		<button>
			<span>{children}</span>
		</button>
	)
}

export default DarkButton
