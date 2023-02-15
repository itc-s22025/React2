import s from 'styles/post-body.module.css'

const PostBody = ({ children }) => {
	return(
		<div className={s.stack}>
			{children}
		</div>
	)
}

export default PostBody
