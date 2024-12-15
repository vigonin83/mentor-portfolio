import { useEffect } from 'react'
import { useMotionValue, motion, animate, useTransform } from 'motion/react'
import styles from './counter.module.scss'

const Counter = ({ keyFrames }) => {
	const initialValue = 0
	const count = useMotionValue(initialValue)
	const roundedCount = useTransform(count, Math.round)

	useEffect(() => {
		const controls = animate(count, keyFrames, { duration: 5 })
		return () => controls.stop()
	}, [])

	return (
		<div className={styles.value}>
			<motion.span className={styles.count}>{roundedCount}</motion.span>
			<span>+</span>
		</div>
	)
}

export default Counter
