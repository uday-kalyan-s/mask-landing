import Styles from '@/styles/Carousel.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import EventCarousel from './EventCarousel'
import AmvCarousel from './AmvCarousel'

function Carousel({bottom, data, Template}) {
    const [selected, setSelected] = useState(null)
    console.log("hello")
    useEffect(() => {
        console.log("hello")
    })
    // setSelected(data[0])
    return (
    <div className={Styles.main}>
        <div className={Styles.upper}>
            <Image
                src='/images/leftarrow.svg'
                width={50}
                height={50}
                alt='left arrow'
                className={Styles.arrow}
                onClick={() => setSelected(
                    data[(selected.key-1)%data.length]
                )}
            />
            <Template data={selected}/>
            <Image
                src='/images/rightarrow.svg'
                width={50}
                height={50}
                alt='right arrow'
                className={Styles.arrow}
                onClick={() => setSelected(
                    data[(selected.key+1)%data.length]
                )}
            />
        </div>
        <div hidden={!bottom}>
            {Array(5).map((_) => (
                <span className={Styles.circle} key={_}>hi</span>
            ))}
        </div>
    </div>
)}

export default Carousel