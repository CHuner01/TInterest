import {UserType} from "../../shared/types";

export default function User({id, name, bio}: UserType) {

    return (
        <>
            <p>{name}</p>
            <p>{bio}</p>
            <button>Написать ему</button>
        </>
    );
}