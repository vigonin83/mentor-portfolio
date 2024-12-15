import { useEffect, useRef } from 'react'
import styles from './benefits.module.scss'
import { useInView } from 'motion/react'

const Benefits = () => {
	const ref = useRef(null)
	const isInView = useInView(ref)
	useEffect(() => {
		//  console.log("Element is in view: ", isInView)
	}, [isInView])

	return (
		<section
			className={styles.section}
			ref={ref}
		>
			<div className={styles.container}>
				<h2 className={styles.title}>Преимущества работы со мной / Почему я</h2>
				Почему я
				<p>
					Работал в службе безопасности, торговле, и после 35 лет попал в IT, за последние два месяца более 20 собесов,
					8 офферов (возможно %) Хочешь так же ? Решения Что вы получаете - преимущества. Легенду, пошаговый план, мок
					интервью, составленное резюме, зарплатные переговоры
				</p>
			</div>
		</section>
	)
}

export default Benefits
