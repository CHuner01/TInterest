import {UserInfoType} from "../../shared/types";

export default function User({id, name, bio}: UserInfoType) {

    return (
        <>
            <p>{name}</p>
            <p>{bio}</p>
            <button>Написать ему</button>
        </>
    );
}