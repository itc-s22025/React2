import s from 'styles/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'

const PostCategories = ({ categories }) => {
	return(
		<div className={s.flexContainer}>
			<h3 className={s.heading}>
				<FontAwesomeIcon icon={faFolderOpen} />
				<span className="sr-only">Categories</span>
			</h3>
		<ul className={s.list}>
			{categories.map(({ name, slug }) => (
				<li key={slug}>
					<Link href={`/blog/category/{$slug}`}>
						{name}
					</Link>
				</li>
			))}
		</ul>
		</div>
	)
}

export default PostCategories
