import LKIcon from "../../app/icons/LKIcon.png";
import MsgIcon from "../../app/icons/MsgIcon.png";
import styles from "./navbar.module.scss"


function Navbar() {

    return (
        <>
            <nav className={styles.container}>
                <div className={styles.nav}>
                    <div className={styles.title}>
                        <p className={styles.titleT}>T</p>
                        <p className={styles.titleIntererst}>Interest</p>
                    </div>
                    <div className={styles.icons}>
                        <img src={LKIcon} alt="Icon" width={30} height={30} />
                        <img src={MsgIcon} alt="Icon" width={30} height={30} />
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;