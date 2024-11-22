import { menu } from '../../../data/menu'
import styles from './nav.module.scss'

const Nav = () => {

	return (
		<nav>
			<ul className={styles.list}>
				{menu.map((item) => {
					return (
						<li key={item.id}>
							<a href={item.link}>{item.name}</a>
						</li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Nav
