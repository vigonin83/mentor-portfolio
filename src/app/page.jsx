'use client'
import Header from './components/layouts/header/header'
import Footer from './components/layouts/footer/footer'
import Connect from './components/ui/connect/connect'
import Logo from './components/ui/logo/logo'
import Nav from './components/ui/nav/nav'
import styles from './page.module.scss'
import Copyright from './components/ui/copyright/copyright'
import Testimonials from '../screens/testimonials/testimonials'
import Contacts from './components/ui/contacts/contacts'
import GoTo from './components/ui/goTo/goTo'
import ArrowDown from './components/ui/arrowDown/arrowDown'
import Tariffs from '../screens/tariffs/tariffs'
import MyServices from '../screens/myServices/myServices'
import Achievements from '../screens/achievements/achievements'
import Benefits from '../screens/benefits/benefits'
import About from '../screens/about/about'
// import { useInView } from 'motion/react'
// import { useEffect, useRef } from 'react'

export default function Home() {
	// const ref = useRef(null)
  	// const isInView = useInView(ref)

	//   useEffect(() => {
		// console.log("Element is in view: ", isInView)
	//  }, [isInView])

	return (
		<div className={styles.page} >
			<Header>
				<Logo />
				<Nav />
				<Connect />
			</Header>
			<GoTo />
			<ArrowDown />
			<main className={styles.main}>
				{/* <h1>IT-Ментор 1</h1>
				<h2>IT-Ментор 2</h2>
				<h3>IT-Ментор 3</h3>
				<h4>IT-Ментор 4</h4>
				<h5>IT-Ментор 5</h5>
				<h6>IT-Ментор 6</h6>

				<section>
					<button class='button-1'>Button 1</button>
					<button class='button-2'>
						<span class='text'>Button 2</span>
					</button>
					<button class='button-1 med'>Button 1</button>
					<button class='button-2 med'>
						<span class='text tmed'>Button 2</span>
					</button>
					<button class='button-1 bg'>Button 1</button>
					<button class='button-2 bg'>
						<span class='text tbg'>Button 2</span>
					</button>
				</section>
				<section>
					<button class='button-1 rad'>Button 1</button>
					<button class='button-2 rad'>
						<span class='text rad'>Button 2</span>
					</button>
				</section>
				<section>
					<button class='button-1 rad med'>Button 1</button>
					<button class='button-2 rad med'>
						<span class='text rad tmed'>Button 2</span>
					</button>
				</section>
				<section>
					<button class='button-1 rad bg'>Button 1</button>
					<button class='button-2 rad bg'>
						<span class='text rad tbg'>Button 2</span>
					</button>
				</section>
				<section>
					<button class='button-1 sq'>Button 3</button>
					<button class='button-2 sq'>
						<span class='text sq'>Button 3</span>
					</button>
					<button class='button-1 sq med'>Button 3</button>
					<button class='button-2 sq med'>
						<span class='text sq tmed'>Button 3</span>
					</button>
					<button class='button-1 sq bg'>Button 3</button>
					<button class='button-2 sq bg'>
						<span class='text sq tbg'>Button 3</span>
					</button>
				</section>
				<section style={{ width: '600px' }}>
					<button class='button-1 bg f'>Button 1</button>
					<button class='button-2 bg f'>
						<span class='text tbg'>Button 2</span>
					</button>
				</section>
				<section style={{ width: '600px' }}>
					<button class='button-1 rad bg f'>Button 1</button>
					<button class='button-2 rad bg f'>
						<span class='text rad tbg'>Button 2</span>
					</button>
				</section>
				<section style={{ width: '600px' }}>
					<button class='button-1 sq bg f'>Button 1</button>
					<button class='button-2 sq bg f'>
						<span class='text sq tbg'>Button 2</span>
					</button>
				</section> */}
				<About />
				<Achievements />
				<Benefits />
				<MyServices />
				<Testimonials />
				<Tariffs />
			</main>
			<Footer>
				<Contacts />
				<Copyright />
			</Footer>
		</div>
	)
}
