import s from 'styles/hero.module.css'
import Image from 'next/image'
//import cube from 'images/cube.jpg'

const cube = {
	src: 'https://images.microcms-assets.io/assets/2527a9f74810444fa3c87e0c33235196/8d7b4c85b58f487c912cff229ba3c1b5/cube.jpg',
	height: 1300,
	width: 1500,
	blurDataURL: 'data:image/jpeg;base64',
}

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

