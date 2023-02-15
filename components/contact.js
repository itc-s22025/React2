import Social from 'components/social'
import s from 'styles/contact.module.css'

const Contact = () => {
	return(
		<div className={s.stack}>
			<h3 className={s.heading}>Contact</h3>
			<Social />
			<address>cube@web.mail.address</address>
		</div>
	)
}

export default Contact
