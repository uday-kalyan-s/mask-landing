import Styles from '@/styles/SocIntro.module.css'
import Image from 'next/image'

const SocIntro = () => {
    return (
        <div className={Styles.main}>
            <Image className={Styles.background}
                src={'/images/background.png'}
                width={2024}
                height={2024}
                alt='background'
            />
            <div className={Styles.backgroundOverlay}>..</div>
            <div className={Styles.info}>
                <div className={Styles.upper}>
                    <span className={Styles.welcome}>Welcome </span>to the official website of
                    <div className={Styles.titlebold}>MANGA & ANIME</div>
                    <div className={Styles.title}>SOCIETY IIT KHARAGPUR</div>
                    <div className={Styles.para}>
                        We are a community that is dedicated to anime and related content. We aim to spread our passion and love for anime, manga, and related media. We create content ranging from AMVs and reels to artwork and sketches, and hold crowd events like anime quizzes.
                    </div>
                    <span className={`${Styles.buttons} ${Styles.leftbutton}`}>
                        About Us
                    </span>
                    <span className={`${Styles.buttons} ${Styles.rightbutton}`}>
                        Check out our latest newsletter {'->'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SocIntro