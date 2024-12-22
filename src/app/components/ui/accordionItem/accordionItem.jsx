import styles from './accordionItem.module.scss'

const AccordionItem = ({title, text,  onClick, isOpen}) => {	

	return (
		<div className={styles.body}>
			<h3 className={styles.title}>
				<button
					className={isOpen ? `${styles.btn} ${styles.btnActive}` : styles.btn }
					onClick={onClick}
				>
					{title}
				</button>
			</h3>
			<div>
				<div className={isOpen ? styles.content : styles.hidden}>{text}</div>
			</div>
		</div>
	)
}

export default AccordionItem
