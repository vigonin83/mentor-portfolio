import styles from './achievements.module.scss'
import Counter from '../../app/components/ui/counter/counter'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { FaSackDollar } from 'react-icons/fa6'
import { IoCalendarSharp } from 'react-icons/io5'
import { MdWorkHistory } from 'react-icons/md'
import { useMediaQuery } from 'react-responsive'

const Achievements = () => {
	const isSTablet = useMediaQuery({
		query: '(max-width: 767.98px)'
	 })

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>
					Мои <span>достижения</span>
				</h2>
				<div className={styles.wrapper}>
					<div className={styles.itemWrapper}>
						<IoCalendarSharp
							size={isSTablet ? 59 : 73}
							color='#fff'
						/>
						<div>
							<Counter keyFrames={30} />
							<p>лет сам пришел в IT</p>
						</div>
					</div>
					<div className={styles.itemWrapper}>
						<FaHandHoldingHeart
							size={isSTablet ? 63 : 77}
							color='#fff'
						/>
						<div>
							<Counter keyFrames={20} />
							<p>благодарных клиентов</p>
						</div>
					</div>
					<div className={styles.itemWrapper}>
						<FaSackDollar
							size={isSTablet ? 59 : 73}
							color='#fff'
						/>
						<div>
							<Counter keyFrames={130} />
							<p>средний оффер</p>
						</div>
					</div>
					<div className={styles.itemWrapper}>
						<MdWorkHistory
							size={isSTablet ? 63 : 77}
							color='#fff'
						/>

						<div>
							<Counter keyFrames={3} />
							<p>коммерческого опыта</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Achievements
