import User from "../../entities/user";
import {usersAPI} from "./api/UserService";

function UserList() {
    const { data: users, error, isLoading } =
        usersAPI.useFetchSameUsersQuery()

    return (
        <>
            {users && users.map((user) => (
                <>
                    <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        bio={user.bio}
                    />
                </>
            ))}
        </>
    );
}

export default UserList;
