import Link from 'next/link'
import s from 'styles/logo.module.css'

const Logo = ({ boxOn = false }) => {
	return(
		<Link href="/">
			<span className={boxOn ? s.box : s.basic}>CUBE</span>
		</Link>
	)
}

export default Logo
