import { useState } from 'react'
import { services } from '../../app/data/services'
import AccordionItem from '../../app/components/ui/accordionItem/accordionItem'
import styles from './myServices.module.scss'

const MyServices = () => {
	const [openId, setId] = useState(null)

	const handleClick = (index) => {
		index === openId ? setId(null) : setId(index)
	}

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>
					Мои <span>кейсы</span>
				</h2>
				<div className={styles.wrapper}>
					{services.map((item, index) => (
						<AccordionItem
							key={item.id}
							{...item}
							isOpen={index === openId}
							onClick={() => handleClick(index)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default MyServices
