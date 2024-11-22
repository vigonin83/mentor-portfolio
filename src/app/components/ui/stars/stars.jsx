import styles from './stars.module.scss'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'

const Stars = ({ rating }) => {
	const countStars = (rating) => {
		const starsArr = []
		const maxLength = 5
		for (let index = 0; index < rating; index++) {
			starsArr.push(
				<TiStarFullOutline
					size={28}
					className={styles.star}
				/>
			)
		}
		if (starsArr.length === maxLength) return starsArr
		if (starsArr.length === maxLength - 1)
			return [
				...starsArr,
				<TiStarOutline
					size={28}
					className={styles.star}
				/>
			]
		if (starsArr.length === maxLength - 2)
			return [
				...starsArr,
				<TiStarOutline
					size={28}
					className={styles.star}
				/>,
				<TiStarOutline
					size={28}
					className={styles.star}
				/>
			]
	}

	const stars = countStars(rating)

	return <span className={styles.stars}>{stars}</span>
}

export default Stars
