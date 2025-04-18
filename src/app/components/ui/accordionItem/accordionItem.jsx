import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import styles from './accordionItem.module.scss'

const box = {
	padding: '0 24px 16px'
}
const transition = {
	ease: "linear" ,
	duration: 0.2,
}

const AccordionItem = ({ title, text, onClick, isOpen }) => {
	return (
		<div className={styles.body}>
			<h3 className={styles.title}>
				<button
					className={isOpen ? `${styles.btn} ${styles.btnActive}` : styles.btn}
					onClick={onClick}
				>
					{title}
				</button>
			</h3>
			<AnimatePresence initial={false}>
				{isOpen ? (
					<motion.div
						initial={{ scale: 0, opacity: 0 }}
						animate={{ scale: '100%', opacity: 1 }}
						exit={{ scale: 0, opacity: 0 }}
						transition={transition}
						style={box}
						key='box'
					>
						{text}
					</motion.div>
				) : null}
			</AnimatePresence>
		</div>
	)
}

export default AccordionItem
