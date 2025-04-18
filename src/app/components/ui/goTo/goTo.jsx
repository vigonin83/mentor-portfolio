'use client'
import { useScrollScreen } from '../../../utils/utils'
import styles from './goTo.module.scss'

const GoTo = () => {
	const { isScrollScreen, toScrollTop } = useScrollScreen()

	return (
		isScrollScreen && (
			<button
				className={styles.body}
				onClick={() => toScrollTop()}
			>
				<span className={styles.content}></span>
			</button>
		)
	)
}

export default GoTo
