import { motion } from 'motion/react'

const MenuUnderline = () => {
	return (
		<motion.div
			layout
         layoutId='menu'
			style={{
				width: '100%',
				height: '2px',
            borderRadius: '8px',
            left: '0',
				position: 'absolute',
				bottom: '-6px',
				background: 'linear-gradient(to right, #61daff, #0085fa)'
			}}
		/>
	)
}

export default MenuUnderline
