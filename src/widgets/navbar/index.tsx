import LKIcon from "../../app/icons/LKIcon.png";
import MsgIcon from "../../app/icons/MsgIcon.png";
import styles from "./navbar.module.scss"
import {Link, useNavigate} from "react-router-dom";

function Navbar() {

    const navigate = useNavigate()

    return (
        <>
            <nav className={styles.container}>
                <div className={styles.nav}>
                    <div className={styles.title} onClick={() => navigate("/main")}>
                        <p className={styles.titleT}>T</p>
                        <p className={styles.titleIntererst}>Interest</p>
                    </div>
                    <div className={styles.icons}>
                        <Link to="/profile">
                            <img src={LKIcon} alt="Icon" width={30} height={30} />
                        </Link>
                        <Link to="/chats">
                            <img src={MsgIcon} alt="Icon" width={30} height={30} />
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;