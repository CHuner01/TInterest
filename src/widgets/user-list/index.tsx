import User from "../../entities/user";
import {usersAPI} from "./usersApi";
import {UserInfoType} from "../../shared/types";
import styles from "./userList.module.scss"

function UserList() {
    const { data: users, error, isLoading } =
        usersAPI.useGetSameUsersQuery(1)

    console.log(users)


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
