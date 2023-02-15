import s from 'styles/container.module.css'

const Container = ({ children, large = false }) =>{
	return(
		<div className={large ? s.large : s.default}>
			{children}
		</div>
	)
}

export default Container
