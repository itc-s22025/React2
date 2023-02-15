import s from 'styles/two-column.module.css'

const TwoColumn = ({ children }) => {
	return(
		<div className={s.flexContainer}>
			{children}
		</div>
	)
}

const TwoColumnMain = ({ children }) => {
	return(
		<div className={s.main}>
			{children}
		</div>
	)
}

const TwoColumnSidebar = ({ children }) => {
	return(
		<div className={s.sidebar}>
			{children}
		</div>
	)
}

export { TwoColumn, TwoColumnMain, TwoColumnSidebar }
