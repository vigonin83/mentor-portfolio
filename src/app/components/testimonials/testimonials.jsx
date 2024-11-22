'use client'
import { IoMdQuote } from "react-icons/io";
import { testimonials } from '../../data/testimonials'
import TestimonialCard from '../testimonialCard/testimonialCard'
import styles from './testimonials.module.scss'
import { EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss';
import 'swiper/scss/effect-fade'
import 'swiper/scss/pagination'

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
	const fadeEffect = {
			crossFade: true
	} 

	return (
		<section className={styles.section}>
			<p className={styles.note}>Отзывы моих клиентов - <br/> ценный источник информации обо мне</p>
			<div className={styles.container}>
				<h2 className={styles.title}>Голос клиента</h2>
				<Swiper
					effect="fade"
					pagination={pagination}
					fadeEffect={fadeEffect}
					modules={[EffectFade, Pagination]}
				>
					<IoMdQuote
						className={styles.img}
						size={50}
					/>
					<div class={styles.bulletContainer}></div>
					{testimonials.map((testimonial) => (
						<SwiperSlide key={testimonial.id}>
							<TestimonialCard {...testimonial} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}

export default Testimonials
