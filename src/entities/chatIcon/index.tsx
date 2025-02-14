import {ChatIconType} from "../../shared/types";
import styles from "./chatIcon.module.scss"

function Chat({name, text, time, user, unread}: ChatIconType) {
    return (
        <div className={styles.container}>
            <div className={styles.chatPhoto}></div>
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <div className={styles.msg}>
                    <div className={styles.userPhoto}></div>
                    <p className={styles.text}>{text}</p>
                    <p className={styles.time}>{time}</p>
                </div>
            </div>
            <div className={styles.dot}></div>
        </div>
    );
}

export default Chat;
