import { tariffs } from '../../data/tariff'
import DarkButton from '../ui/buttons/darkButton/darkButton'
import WhiteButton from '../ui/buttons/whiteButton/whiteButton'
import styles from './tarifCard.module.scss'

const TariffCard = ({ title, price, discountPrice, dark, radius }) => {
	const getStyles = () => {
		if (dark) {
			if (radius === 'right') return `${styles.cardDark} ${styles.rightRadius}`
			else if (radius === 'left') return `${styles.cardDark} ${styles.leftRadius}`
			else return styles.cardDark
		} else {
			return styles.card
		}
	}
	return (
		// <div className={dark ? (radius ? styles.cardDark : `${styles.cardDark} ${styles.noRadius}`) : styles.card}>
		<div className={getStyles()}>
			<div className={dark ? styles.wrapper : `${styles.wrapper} ${styles.border}`}>
				<div className={styles.header}>
					<img
						src='#'
						alt=''
					/>
					<div>
						<h4>{title}</h4>
						<p className={styles.price}>{price} Р.</p>
						<p className={styles.price}>{discountPrice} Р.</p>
					</div>
				</div>
				<ul className={styles.list}>
					<li className={styles.item}>Техническое интервью</li>
					<li className={styles.item}>Поведенческое интервью</li>
					<li className={styles.item}>Персональная легенда</li>
					<li className={styles.item}>Увеличение конверсии по резюме</li>
					<li className={styles.item}></li>
				</ul>

				{dark ? (
					<DarkButton isLink={true}>Заказывай</DarkButton>
				) : (
					<div className={styles.btnContainer}>
						<WhiteButton isLink={true}>Заказывай</WhiteButton>
					</div>
				)}
			</div>
		</div>
	)
}

export default TariffCard
