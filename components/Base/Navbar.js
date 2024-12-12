import Styles from '@/styles/Navbar.module.css'
import Image from 'next/image';

const Navbar = () => {
    const navItems = [
        "Home", "Art", "Newsletters", "Events", "Members"
    ];
    return (
        <div className={Styles.navbar}>
            <div className={Styles.leftContainer}>
                <Image
                    src="/images/logo.png"
                    width={40}
                    height={40}
                    style={{borderRadius: '50%'}}
                    className={Styles.navItem}
                    alt='mask-logo'
                />
                {navItems.map(item => 
                    <div className={Styles.navItem} key={item}>
                        {item}
                    </div>
                )}
            </div>
            <div className={Styles.aboutUs}>
                About Us
            </div>
        </div>
    )
}

export default Navbar