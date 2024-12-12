import Image from "next/image";
import Styles from "@/styles/EventCarousel.module.css"

const EventCarousel = () => {
    return (
        <div className={Styles.main}>
            <Image
                src='/images/hunt.png'
                width={558}
                height={421}
                alt="event pic"
                className={Styles.image}
            />
            <div className={Styles.right}>
                <div className={Styles.title}>Treasure Hunt</div>
                <span className={Styles.content}>
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Dui volutpat torquent netus est augue. Commodo risus vel adipiscing, est convallis nostra. Class fringilla etiam dis tellus suscipit adipiscing fusce curabitur. Proin pellentesque nascetur consectetur convallis, varius quisque. Fermentum ac libero et maximus primis litora massa orci. Fames auctor maecenas .
                </span>
                <span className={Styles.content}>
                    Sagittis himenaeos magna parturient himenaeos dictumst ligula. Amet maximus per diam tempor, egestas ullamcorper. Etiam penatibus urna nulla praesent volutpat hac. Morbi
                </span>
                <button className={Styles.button}>Read More {'->'}</button>
            </div>
        </div>
    )
}

export default EventCarousel