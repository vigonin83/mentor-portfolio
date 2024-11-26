import Stars from '../ui/stars/stars'
import styles from './testimonialCard.module.scss'
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti'

const TestimonialCard = ({ name, age, text, profession, rating }) => {
	// const stars = countStars(rating)

	return (
		<div className={styles.card}>
			<div className={styles.wrapper}>
				<Stars rating={rating} />
				<h4 className={styles.title}>{name}</h4>
				<div className={styles.note}>
					<span>{profession},</span> <span>{age}</span>
				</div>
				<p className={styles.text}>{text}</p>
			</div>
		</div>
	)
}

export default TestimonialCard
