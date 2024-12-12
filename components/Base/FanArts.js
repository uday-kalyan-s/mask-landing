import Styles from '@/styles/FanArts.module.css'
import Carousel from './Carousels/Carousel'

const FanArts = () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.left}>
                <div className={Styles.title}><span className={Styles.bold}>Fanart</span> Submissions</div>
                <div className={Styles.content}>Lorem ipsum odor amet, consectetuer adipiscing elit. Dui volutpat torquent netus est augue. Commodo risus vel adipiscing, est convallis nostra. Class fringilla etiam dis tellus suscipit adipiscing fusce curabitur. Proin pellentesque nascetur consectetur convallis, </div>
                <button className={Styles.button}>Our Artworks {'->'}</button>
            </div>
            <div className={Styles.right}>
                <Carousel bottom={true}>
                    <div className={Styles.fanart}>
                        <div className={Styles.description}>
                            <div className={Styles.leftdesc}>
                                <div className={Styles.desctitle}>Fanart Submissions</div>
                                Submitted by: Ankan Chakraborthy
                            </div>
                            <div className={Styles.button}>
                                Submit your own Fanart
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default FanArts