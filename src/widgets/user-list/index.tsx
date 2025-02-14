import User from "../../entities/user";
import {usersAPI} from "./usersApi";
import {UserInfoType} from "../../shared/types";
import styles from "./userList.module.scss"

function UserList() {
    const { data: users, error, isLoading } =
        usersAPI.useGetSameUsersQuery()

    console.log(users)

    // const users: UserInfoType[] = [
    //     {
    //         id: 0,
    //         name: "Никита Кузляев",
    //         city: "Томск",
    //         position: "Project manager",
    //         tags: ["вязание", "программирование", "спорт", "музыка", "робототехника"],
    //         bio: "Сложнее всего начать действовать, все остальное зависит только от упорства."
    //     },
    //     {
    //         id: 1,
    //         name: "Дмитрий Ни",
    //         city: "Томск",
    //         position: "Backend разработчик",
    //         tags: ["робототехника", "рисование", "аниме", "игры"],
    //         bio: "Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно."
    //     },
    //     {
    //         id: 2,
    //         name: "Александра Ланшакова",
    //         city: "Томск",
    //         position: "Дизайнер",
    //         tags: ["игры", "книги", "фильмы", "рисование"],
    //         bio: "Вы никогда не пересечете океан, если не наберетесь мужества потерять берег из виду."
    //     }]

    return (
        <div className={styles.container}>
            {users && users.map((user) => (
                <>
                    <User
                        key={user.id}
                        id={user.id}
                        name={user.firstName + " " + user.lastName}
                        city={user.city}
                        position={user.teamPosition}
                        // tags={user.tags}
                        bio={user.bio}
                    />
                </>
            ))}
        </div>
    );
}

export default UserList;
