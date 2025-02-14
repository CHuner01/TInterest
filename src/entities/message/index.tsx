
import styles from "./message.module.scss"
import {MessageType} from "../../shared/types";

function Message({name, text, time}: MessageType) {
    return (
        <div className={styles.container}>
            <div className={styles.photo}>{name[0]}</div>
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.text}>{text}</p>
            </div>
            <p className={styles.time}>{time}</p>
        </div>
    );
}

export default Message;
