import s from 'styles/hero.module.css'

const Hero = ({ title, subtitle, imageOn = false }) => {
        return(
                <main>
			<div className={s.text}>
	                        <h1 className={s.title}>{title}</h1>
				<p className={s.subtitle}>{subtitle}</p>
				{imageOn && <figure> [画像] </figure>}
			</div>
		</main>
        )
}

export default Hero

