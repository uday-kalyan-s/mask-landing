import Styles from '@/styles/Carousel.module.css'
import Image from 'next/image'


const Carousel = ({children, bottom}) => (
    <div className={Styles.main}>
        <div className={Styles.upper}>
            <Image
                src='/images/leftarrow.svg'
                width={50}
                height={50}
                alt='left arrow'
                className={Styles.arrow}
            />
            {children}
            <Image
                src='/images/rightarrow.svg'
                width={50}
                height={50}
                alt='right arrow'
                className={Styles.arrow}
            />
        </div>
        <div hidden={!bottom}>
            {Array(5).map((_) => (
                <span className={Styles.circle} key={_}>hi</span>
            ))}
        </div>
    </div>
)

export default Carousel