import Image from 'next/image'
import styles from './about.module.scss'
import img from '../../../public/img/man.jpg'

const About = () => {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.wrapper}>
					<div className={styles.text}>
						<p className={styles.preTitle}>Привет Всем, меня зовут  Василий,</p>
						<h1 className={styles.title}>Я Frontend - разработчик</h1>
						<p>
							Я разработчик с более чем 3-летним опытом. Специализируюсь на React, TypeScript. <br /> Моя цель - помочь тебе освоить эту увлекательную профессию. 
						</p>
						<p>
							Еще совсем недавно я был такой же как ты. Да, да я сам пришел в эту сферу после 30 лет. <br />
							Моя техническая экспертиза и навыки коммуникации помогут оказаться здесь или прыгнуть еще выше.
							Листай ниже и я тебе обьясню почему нам стоит поработать . . .
						</p>
						<button>Давай работать</button>
					</div>
					<div>
						<Image
							src={img}
							alt='разработчик'
							width={550}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
