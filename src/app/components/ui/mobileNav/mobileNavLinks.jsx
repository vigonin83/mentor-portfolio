import Link from 'next/link'
import styles from './mobileNavLink.module.scss'

const MobileNavLinks = ({ onClick }) => {

const mobileNav = [
		{ id: '01', title: 'Преимущества', path: '#' },
		{ id: '02', title: 'Мои кейсы', path: '#' },
		{ id: '03', title: 'Портфолио', path: '#' },
		{ id: '04', title: 'Отзывы', path: '#' },
		{ id: '05', title: 'Предложения', path: '#' },
	]

	const handleClose = () => {
		setTimeout(() => {
			document.body.classList.remove('close')
		}, 200)
		onClick()
	}

	return (
		<div className={styles.wrapper}>
			<div
				className={styles.close}
				onClick={handleClose}
			/>
			{mobileNav.map((item) => (
				<Link
					href={item.path}
					key={item.id}
					className={styles.link}
					onClick={handleClose}
				>
					{item.title}
				</Link>
			))}
		</div>
	)
}

export default MobileNavLinks
