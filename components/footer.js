import Container from 'components/container'	
import Logo from 'components/logo'
import s from 'styles/footer.module.css'

const Footer = () => {
        return(
                <footer className={s.wrapper}>
			<Container>
				<div className={s.flexContainer}>
		                        <Logo />
					[ソーシャル]
				</div>
			</Container>
                </footer>
        )
}

export default Footer

