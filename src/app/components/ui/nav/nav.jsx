import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import { useState } from 'react'
import { menu } from '../../../data/menu'
import styles from './nav.module.scss'
import { relative } from 'path'
import MenuUnderline from '../menuUnderline/menuUnderLine'

const Nav = () => {
	const [activeIndex, setActiveIndex] = useState()

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				{menu.map((item, idx) => {
					return (
						<motion.li
							key={item.id}
							onClick={() => setActiveIndex(idx)}
							style={{ padding: '0 0.5rem', display: 'flex', justifyContent: 'center', position: 'relative' }}
							initial={{ color: '#fff' }}
							animate={{ color: activeIndex === idx ? '#0085fa' : '#fff' }}
						>
							<a
							href={'#'}
							>
								{activeIndex === idx && <MenuUnderline />}
								{item.name}
							</a>
						</motion.li>
					)
				})}
			</ul>
		</nav>
	)
}

export default Nav
