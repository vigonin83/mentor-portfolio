'use client'
import { testimonials } from '../../data/testimonials'
import TestimonialCard from '../testimonialCard/testimonialCard'
import styles from './testimonials.module.scss'
import { EffectFade, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/effect-fade'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

const Testimonials = () => {
	const pagination = {
		clickable: true,
		el: `.${styles.bulletContainer}`,
		bulletClass: styles.bullet,
		bulletActiveClass: styles.bulletActive,
		renderBullet: function (_, className) {
			return `<div class="${className}"><div class="${styles.dot}"><span></span></div></div>`
		}
	}

	const navigation = {
		disabledClass: `${styles.disBtn}`,
		speed: 900,
		nextEl: `.${styles.nextBtn}`,
		prevEl: `.${styles.prevBtn}`
	}

	const fadeEffect = {
		crossFade: true
	}

	return (
		<section className={styles.section}>
			<p className={styles.note}>
				Отзывы моих клиентов - <br /> ценный источник информации обо мне
			</p>
			<div className={styles.container}>
				<h2 className={styles.title}>
					<span>Голос</span> клиента
				</h2>
				<Swiper
					effect='fade'
					draggable={false}
					pagination={pagination}
					navigation={navigation}
					fadeEffect={fadeEffect}
					modules={[EffectFade, Pagination, Navigation]}
				>
					<div class={styles.bulletContainer}></div>
					{testimonials.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialCard {...testimonial} />
						</SwiperSlide>
					))}
					<div className={styles.nextBtn}></div>
					<div className={styles.prevBtn}></div>
				</Swiper>
			</div>
		</section>
	)
}

export default Testimonials
