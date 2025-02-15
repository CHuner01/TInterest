import {ChatIconType} from "../../shared/types";
import styles from "./chatIcon.module.scss"
import {Link} from "react-router-dom/dist";
import LKIcon from "../../app/icons/LKIcon.png";

function Chat({id, name, text, time, user, userName, unread}: ChatIconType) {
    return (

        <div className={styles.container}>
            <div className={styles.chatPhoto}>{name[0]}</div>
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <div className={styles.msg}>
                    <div className={styles.userPhoto}>{userName[0]}</div>
                    <p className={styles.text}>{text}</p>
                    <p className={styles.time}>{time}</p>
                </div>
            </div>
            <div className={styles.dot}></div>
        </div>

    );
}

export default Chat;
