import {UserInfoType} from "../../shared/types";
import styles from "./user.module.scss"
import TagList from "../../widgets/tag-list";
import {usersAPI} from "../../widgets/user-list/usersApi";

export default function User({id, name, city, position, bio}: UserInfoType) {

    const {data: tags, error, isLoading} =
        usersAPI.useGetUserTagsQuery(id)


    return (
        <div className={styles.container}>
            <div className={styles.photo}>{name[0]}</div>
            <div className={styles.info}>
                <p className={styles.name}>{name}</p>
                <p className={styles.city}>г.{city}, {position}</p>
                {/*{tags && <TagList tags={tags}/>}*/}
                <p className={styles.bio}>{bio}</p>
            </div>
        </div>
    );
}