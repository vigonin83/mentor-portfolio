import { tariffs } from '../../data/tariff'
import TariffCard from '../tariffCard/tarifCard'
import styles from './tariffs.module.scss'

const Tariffs = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>Выгодные предложения для Тебя</h2>
				<div className={styles.cardContainer}>
					<TariffCard
						dark={true}
						radius={'left'}
					/>
					<TariffCard dark={true} />
					<TariffCard />
					<TariffCard
						dark={true}
						radius={'right'}
					/>
				</div>
			</div>
		</section>
	)
}

export default Tariffs
