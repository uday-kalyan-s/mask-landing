import Image from "next/image";
import Styles from "@/styles/EventCarousel.module.css"

const EventCarousel = (data) => {
    return (
        <div className={Styles.main}>
            <Image
                src={data.url}
                width={558}
                height={421}
                alt="event pic"
                className={Styles.image}
            />
            <div className={Styles.right}>
                <div className={Styles.title}>{data.name}</div>
                {/* {data.content.map(para => (
                    <span className={Styles.content} key={data.key}>
                        {para}
                    </span>
                ))} */}
                <button className={Styles.button}>Read More {'->'}</button>
            </div>
        </div>
    )
}

export default EventCarousel