import User from "../../entities/user";
import {usersAPI} from "./usersApi";
import {UserInfoType} from "../../shared/types";
import styles from "./userList.module.scss"

function UserList() {
    // const { data: users, error, isLoading } =
    //     usersAPI.useGetSameUsersQuery()

    const users: UserInfoType[] = [{
        id: 0,
        name: "Никита Чел",
        city: "Томск",
        position: "Крутой менеджер",
        tags: ["сериалы", "аниме", "аниме", "аниме", "аниме", "аниме", "аниме", "аниме", "аниме", "аниме", "аниме", "аниме",
            "аниме", "аниме", "аниме", "аниме", "аниме", "аниме", "аниме", "аниме", "аниме", "аниме"],
        bio: "текст текст текст текст текст текст текст текст текст текст текст текст" +
            "текст текст текст текст текст текст текст текст текст текст текст текст" +
            "текст текст текст текст текст текст текст текст текст текст текст текст" +
            "текст текст текст текст текст текст текст текст текст текст текст текст" + "Lorem ipsum dolor sit amet, " +
            "consectetur adipisicing elit. Accusantium at autem cumque dolor dolores dolorum eaque earum eum impedit " +
            "iste minus modi molestias natus, omnis perspiciatis possimus quaerat similique. Perspiciatis.\n"
        },
        {
            id: 1,
            name: "Никита Чел",
            city: "Томск",
            position: "Крутой менеджер",
            tags: ["сериалы", "аниме"],
            bio: "текст текст текст"
        },
        {
            id: 2,
            name: "Никита Чел",
            city: "Томск",
            position: "Крутой менеджер",
            tags: ["сериалы", "аниме"],
            bio: "текст текст текст"
        }]

    return (
        <div className={styles.container}>
            {users && users.map((user) => (
                <>
                    <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        city={user.city}
                        position={user.position}
                        tags={user.tags}
                        bio={user.bio}
                    />
                </>
            ))}
        </div>
    );
}

export default UserList;
