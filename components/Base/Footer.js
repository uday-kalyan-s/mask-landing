import Styles from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={Styles.main}>
            <span className={Styles.category}><span className={Styles.subcat}>Privacy policy</span><span className={Styles.subcat}>Terms of use</span></span>
            <span className={Styles.category}>© 2024 Manga and Anime Society Kharagpur. All Rights Reserved. </span>
            <span className={Styles.category}><span>Privacy policy</span><span>Terms of use</span></span>
        </footer>
    )
}

export default Footer