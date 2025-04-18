import { useEffect, useRef } from 'react'
import { useMotionValue, motion, animate, useTransform, useInView } from 'motion/react'
import styles from './counter.module.scss'

const Counter = ({ keyFrames }) => {
	const initialValue = 0
	const count = useMotionValue(initialValue)
	const roundedCount = useTransform(count, Math.round)
	const ref = useRef(null)
	const inView = useInView(ref)

	useEffect(() => {
		if(inView) animate(count, keyFrames, { duration: 5 })
	}, [inView, count])

	return (
		<div className={styles.value} ref={ref}>
			<motion.span  className={styles.count}>{roundedCount}</motion.span>
			<span>+</span>
		</div>
	)
}

export default Counter
