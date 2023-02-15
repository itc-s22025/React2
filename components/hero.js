import s from 'styles/hero.module.css'
import Image from 'next/image'
import cube from 'images/cube.jpg'

const Hero = ({ title, subtitle, imageOn = false }) => {
        return(
                <main>
			<div className={s.flexContainer}>
				<div className={s.text}>
		                        <h1 className={s.title}>{title}</h1>
					<p className={s.subtitle}>{subtitle}</p>
				</div>
				{imageOn && (
					<figure className="s.image">
						<Image
							src={cube} 
							alt="" 
							layout="responsive" 
							sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
							priority
							placeholder="blur"
						/>
					</figure>
				)}
			</div>
		</main>
        )
}

export default Hero

