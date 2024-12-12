import Styles from '@/styles/AboutUs.module.css'

const AboutUs = () => {
    
    return (
        <div className={Styles.main}>
            <div className={Styles.left}>
                <div className={Styles.title1}><span className={Styles.bolded}>About</span> Us</div>
                <div className={Styles.title2}>OUR SOCIETY CONSISTS OF <span className={Styles.bolded}>FIVE</span> TEAMS</div>
                <div className={Styles.para}>volutpat torquent netus est augue. Commodo risus vel adipiscing, est convallis nostra. Class fringilla etiam dis tellus suscipit adipiscing fusce curabitur. Proin pellentesque nascetur consectetur convallis, varius quisque. Fermentum ac libero et maximus primis litora massa orci. Fames auctor maecenas .</div>
                <div className={Styles.para}>Sagittis himenaeos magna parturient himenaeos dictumst ligula. Amet maximus per diam tempor, egestas ullamcorper. Etiam penatibus urna nulla praesent volutpat hac. Morbi</div>
                <button className={Styles.button}><span className='leftbt'>Meet the Teams</span><span>{'->'}</span></button>
            </div>
            <div className={Styles.right}>
                
            </div>
        </div>
    )
}

export default AboutUs