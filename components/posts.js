import s from 'styles/posts.module.css'
import Link from 'next/link'

const Posts = ({ posts }) => {
	return(
		<div className={s.gridContainer}>
			{posts.map(({ title,slug }) => (
				<article className={s.post} key={slug}>
					<Link href={`/blog/${slug}`}>
						<h2>{title}</h2>
					</Link>
				</article>
			))}
		</div>
	)
}

export default Posts
