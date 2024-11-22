import styles from './myServices.module.scss'

const MyServices = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>Мои услуги</h2>
				<ul>
					<li>1.Техническое мок-интервью - позиция Frontend - разработчик (стек: React, TypeScript, Redux)</li>
					<li>2.Поведенческое интервью - протестируем твои Soft Skills.</li>
					<li>3.Cоставление легенды - составим персональную легенду для тебя исходя из твоих параметров</li>
					<li>4.Составление продающего резюме - увеличим отклики на твою кандидатуру</li>
				</ul>
			</div>
		</section>
	)
}

export default MyServices
