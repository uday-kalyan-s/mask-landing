import Styles from '@/styles/EventsCard.module.css'
import Image from 'next/image'

const EventsCard = () => {
    const eventDetails = [
        {
            'name': 'OCAQ',
            'details': 'Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis'
        },
        {
            'name': 'Treasure Hunt',
            'details': 'Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis'
        },
        {
            'name': 'Art Competition',
            'details': 'Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis'
        }
    ]
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.main}>
                <div className={`${Styles.eventbox} ${Styles.rightborder}`}>
                    <div className={Styles.title}>
                        Recent Events
                    </div>
                    <div className={Styles.content}>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Odio iaculis primis nisi imperdiet adipiscing facilisis enim sociosqu. 
                    </div>
                </div>
                {
                    eventDetails.map(event => (
                        <div className={Styles.eventbox} key={event}>
                            <Image
                                src="/images/calicon.png"
                                height={40}
                                width={40}
                                alt = "logo"
                                style={{marginBottom:'15px'}}
                            />
                            <div className={Styles.title}>{event["name"]}</div>
                            <div className={Styles.content}>{event["details"]}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EventsCard