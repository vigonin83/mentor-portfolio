'use client'
import { useLayoutEffect, useState } from 'react'

export const useScrollScreen = () => {

	const toScrollTop = () => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		})
	}

	const [isScrollScreen, setScreenHeight] = useState(false)

	useLayoutEffect(() => {
		const logScreen = () => {
			const scrollHeight = window.scrollY
			if (scrollHeight >= 950) {
				setScreenHeight(true)
			} else {
				setScreenHeight(false)
			}
		}
		window.addEventListener('scroll', logScreen)

		return () => {
			window.removeEventListener('scroll', logScreen)
		}
	}, [])

	return { isScrollScreen, toScrollTop }
}
