import {UserInfoType} from "../../shared/types";
import styles from "./user.module.scss"
import TagList from "../../widgets/tag-list";

export default function User({id, name, city, position, tags, bio}: UserInfoType) {

    return (
        <div className={styles.container}>
            <div className={styles.photo}>{name[0]}</div>
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.city}>г.{city}, {position}</p>
                <TagList tags={tags}/>
                <p className={styles.bio}>{bio}</p>
            </div>
        </div>
    );
}