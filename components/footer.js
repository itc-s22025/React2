import Logo from 'components/logo'
import s from 'styles/footer.module.css'

const Footer = () => {
        return(
                <footer className={s.wrapper}>
			<div className={s.flexContainer}>
	                        <Logo />
				[ソーシャル]
			</div>
                </footer>
        )
}

export default Footer

