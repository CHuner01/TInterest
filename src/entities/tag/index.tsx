import {TagType} from "../../shared/types";


export default function Tag({id, name, selected}: TagType) {

    return (
        <>
            <button>Выбрать</button>
            <p>{name}</p>
        </>
    );
}