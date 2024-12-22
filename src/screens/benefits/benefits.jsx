import styles from './benefits.module.scss'

const Benefits = () => {
	return (
		<section className={styles.section}>
			<p className={styles.note}>
				Рвасскажу тебе - <br /> почему нам стоит поработать
			</p>
			<div className={styles.container}>
				<h2 className={styles.title}>
					<span>Преимущества работы со</span> мной
				</h2>
				<div className={styles.wrapper}>
					<div className={styles.left}>
						<div className={styles.body}>
							<ul className={styles.list}>
								<li className={styles.item}>
									<h5 className={styles.itemTitle}>Узнаешь как проходить СБ</h5>
									<p className={styles.itemText}>
										<span className={styles.itemSubtitle}>Служба безопасности</span>
										<span className={styles.itemNote}>Специалист</span>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iusto! Voluptatibus placeat
										aliquam temporibus sed blanditiis quos maiores culpa perferendis rem in. Maxime, nisi obcaecati
										debitis et earum rem iure nobis at. Fugiat, in provident.
									</p>
								</li>
								<li className={styles.item}>
									<h5 className={styles.itemTitle}>Увеличим конверсию откликов на твое резюме</h5>
									<p className={styles.itemText}>
										<span className={styles.itemSubtitle}>Служба безопасности</span>
										<span className={styles.itemNote}>Специалист</span>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iusto! Voluptatibus placeat
										aliquam temporibus sed blanditiis quos maiores culpa perferendis rem in. Maxime, nisi obcaecati
										debitis et earum rem iure nobis at. Fugiat, in provident.
									</p>
								</li>
								<li className={''}>
									<h5 className={styles.itemTitle}>Как провести зарплатные переговоры</h5>
									<p className={styles.itemText}>
										<span className={styles.itemSubtitle}>Служба безопасности</span>
										<span className={styles.itemNote}>Специалист</span>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iusto! Voluptatibus placeat
										aliquam temporibus sed blanditiis quos maiores culpa perferendis rem in. Maxime, nisi obcaecati
										debitis et earum rem iure nobis at. Fugiat, in provident.
									</p>
								</li>
							</ul>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.body}>
							<ul className={styles.list}>
								<li className={styles.item}>
									<h5 className={styles.itemTitle}>Вытащим собеседование на Soft-skill</h5>
									<p className={styles.itemText}>
										<span className={styles.itemSubtitle}>Служба безопасности</span>
										<span className={styles.itemNote}>Специалист</span>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iusto! Voluptatibus placeat
										aliquam temporibus sed blanditiis quos maiores culpa perferendis rem in. Maxime, nisi obcaecati
										debitis et earum rem iure nobis at. Fugiat, in provident.
									</p>
								</li>
								<li className={styles.item}>
									<h5 className={styles.itemTitle}>Преимущества</h5>
									<p className={styles.itemText}>
										<span className={styles.itemSubtitle}>Служба безопасности</span>
										<span className={styles.itemNote}>Специалист</span>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iusto! Voluptatibus placeat
										aliquam temporibus sed blanditiis quos maiores culpa perferendis rem in. Maxime, nisi obcaecati
										debitis et earum rem iure nobis at. Fugiat, in provident.
									</p>
								</li>
								<li className={''}>
									<h5 className={styles.itemTitle}>Преимущества</h5>
									<p className={styles.itemText}>
										<span className={styles.itemSubtitle}>Служба безопасности</span>
										<span className={styles.itemNote}>Специалист</span>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, iusto! Voluptatibus placeat
										aliquam temporibus sed blanditiis quos maiores culpa perferendis rem in. Maxime, nisi obcaecati
										debitis et earum rem iure nobis at. Fugiat, in provident.
									</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Benefits
