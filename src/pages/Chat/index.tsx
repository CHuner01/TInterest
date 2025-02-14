import Navbar from "../../widgets/navbar";
import Footer from "../../widgets/footer";

import User from "../../entities/user";
import {ChatIconType} from "../../shared/types";
import ChatIcon from "../../entities/chatIcon";
import {useEffect, useRef} from "react";
// import styles from "./chat.module.scss"

function Chat() {

    const chatRef = useRef(null);

    // Прокрутка вниз после загрузки всех сообщений
    // useEffect(() => {
    //     if (chatRef.current) {
    //         chatRef.current.scrollTop = chatRef.current.scrollHeight;
    //     }
    // }, []);


    return (
        <>

        </>
    );
}

export default Chat;
