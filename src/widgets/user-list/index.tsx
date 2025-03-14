import User from "../../entities/user";
import {usersAPI} from "./usersApi";
import {UserInfoType} from "../../shared/types";
import styles from "./userList.module.scss"

function UserList() {
    // const { data: users, error, isLoading } =
    //     usersAPI.useGetSameUsersQuery(1)

    const users = [
        {
            id: 1,
            name: "Роман Кравцов",
            city: "Томск",
            position: "Frontend разработчик",
            bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi architecto asperiores autem commodi dolorem "
        },
        {
            id: 2,
            name: "Никита Кузляев",
            city: "Томск",
            position: "Product менеджер",
            bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi architecto asperiores autem commodi dolorem " +
                "enim error fugiat hic ipsum minus nobis non nostrum, odit perferendis praesentium quaerat qui quia." +
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi architecto asperiores autem commodi dolorem " +
                "enim error fugiat hic ipsum minus nobis non nostrum, odit perferendis praesentium quaerat qui quia."
        },
        {
            id: 3,
            name: "Евгений Васин",
            city: "Томск",
            position: "Backend разработчик",
            bio: "О себе"
        },
    ]


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
                        // tags={user.tags}
                        bio={user.bio}
                    />
                </>
            ))}
        </div>
    );
}

export default UserList;
