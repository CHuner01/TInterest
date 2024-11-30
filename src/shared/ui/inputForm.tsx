import {useState} from "react";

type PropsType = {
    sendParams: (email: string, password: string) => void;
}

function InputForm({sendParams} : PropsType) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <>
            <p>Почта</p>
            <input onChange={(e) => (setEmail(e.target.value))}/>
            <p>Пароль</p>
            <input onChange={(e) => (setPassword(e.target.value))}/>
            <button onClick={() => sendParams(email, password)}>Отправить</button>
        </>
    );
}

export default InputForm