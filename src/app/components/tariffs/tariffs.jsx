import { tariffs } from '../../data/tariff'
import TariffCard from '../tariffCard/tarifCard'
import styles from './tariffs.module.scss'

const Tariffs = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>Выгодные предложения для <span>Тебя</span></h2>
				<div className={styles.cardContainer}>
					<TariffCard
						dark={true}
						radius={'left'}
						title={tariffs[0].title}
						cost={tariffs[0].cost}
						discountCost={tariffs[0].discountCost}
					/>
					<TariffCard
						dark={true}
						title={tariffs[1].title}
						cost={tariffs[1].cost}
						discountCost={tariffs[1].discountCost}
					/>
					<TariffCard
						title={tariffs[2].title}
						cost={tariffs[2].cost}
						discountCost={tariffs[2].discountCost}
					/>
					<TariffCard
						dark={true}
						radius={'right'}
						title={tariffs[3].title}
						cost={tariffs[3].cost}
						discountCost={tariffs[3].discountCost}
					/>
				</div>
			</div>
		</section>
	)
}

export default Tariffs
