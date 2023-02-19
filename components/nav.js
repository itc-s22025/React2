import { useState } from 'react'
import Link from 'next/link'
import s from 'styles/nav.module.css'

const Nav = () => {
	const [navIsOpen, setNavIsOpen] = useState(false)

	const toggleNav = () => {
		setNavIsOpen((prev) => !prev)
	}

	const closeNav = () => {
		setNavIsOpen(false)
	}
	return(
		<nav className={navIsOpen ? s.open : s.close}>
			{navIsOpen && (
				<style jsx global>{`
					@media (max-width: 767px){
						body{
							overflow: hidden;
							position: fixed;
							width: 100%;
						}
					}
				`}</style>
			)}

			<button className={s.btn} onClick={toggleNav}>
				<span className={s.bar}></span>
				<span className="sr-only">MENU</span>
			</button>
			<ul className={s.list}>
				<li>
					<Link href="/">
						<span onClick={closeNav}>Home</span>
					</Link>
				</li>
				<li>
					<Link href="/about">
						<span onClick={closeNav}>About</span>
					</Link>
				</li>
				<li>
					<Link href="/blog">
						<span onClick={closeNav}>Blog</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
