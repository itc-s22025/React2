import s from 'styles/post-header.module.css'
import ConvertDate from 'components/convert-date'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const PostHeader = ({ title, subtitle, publish = '' }) => {
	return(
		<div className={s.stack}>
			<p className={s.subtitle}>{subtitle}</p>
			<h1 className={s.title}>{title}</h1>
			{publish && (
				<div className={s.publish}>
				<FontAwesomeIcon icon={faClock} size="lg" color="var(--gray-25)" />
				<ConvertDate dateISO={publish} />
				</div>
			)}
		</div>
	)
}

export default PostHeader
