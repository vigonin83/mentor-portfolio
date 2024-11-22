import { contacts } from '../../../data/contacts'
import styles from './contacts.module.scss'

const Contacts = () => {
	return (
		<>
			<div className={styles.contacts}>
				<ul className={styles.list}>
					{contacts.map((item) => (
						<li key={item.id}>
							<a
								className={styles.link}
								href={item.link}
								target='_blank'
								rel='noopener noreferrer'
							>
								{item.icon}
							</a>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default Contacts
