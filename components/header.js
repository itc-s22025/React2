import Logo from 'components/logo'
import Nav from 'components/nav'
import s from 'styles/header.module.css'

const Header = () => {
        return(
                <header>
			<div className={s.flexContainer}>
	                	<Logo boxOn />
				<Nav />
			</div>
		</header>
        )
}

export default Header
                      
