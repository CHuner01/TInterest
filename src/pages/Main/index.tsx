import {useEffect, useState} from "react";
import {UserInfoType} from "../../shared/types";
import {apiAxios} from "../../shared/config";
import User from "../../entities/user";
import {usersAPI} from "../../widgets/user-list/api/UserService";
import UserList from "../../widgets/user-list";


function MainPage() {


    return (
        <>
            <button>Выйти</button>
            <button>В профиль</button>
            <button>В чаты</button>

            <UserList />
        </>
    );
}

export default MainPage;