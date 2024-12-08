import {useEffect, useState} from "react";
import {UserInfoType} from "../../shared/types";
import {apiAxios} from "../../shared/config";
import User from "../../entities/user";


function MainPage() {

    const [users, setUsers] = useState<UserInfoType[]>([]);

    useEffect(() => {
        getSameUsers();
    }, []);

    function getSameUsers() {
        apiAxios.get("/sameUsers")
            .then(function(response) {
                console.log(response);
                setUsers(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>
            <button>Выйти</button>
            <button>В профиль</button>
            <button>В чаты</button>

            {users.map((user) => (
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

export default MainPage;