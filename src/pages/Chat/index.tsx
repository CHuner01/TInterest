import Navbar from "../../widgets/navbar";
import Footer from "../../widgets/footer";

import User from "../../entities/user";
import {ChatIconType, MessageType} from "../../shared/types";
import ChatIcon from "../../entities/chatIcon";
import {useEffect, useRef} from "react";
import styles from "./chat.module.scss"
import {usersAPI} from "../../widgets/user-list/usersApi";
import {chatAPI} from "./chatApi";
import {useParams} from "react-router-dom";
import Message from "../../entities/message";
import message from "../../entities/message";

function Chat() {

    const {id} = useParams<{ id: string }>();
    const chatId = Number(id);

    // const { data: messages, error, isLoading } =
    //     chatAPI.useGetMessagesQuery(chatId)

    const messages: MessageType[] = [{
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
            },
        {
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
        },{
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
        },{
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
        },{
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
        },{
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
        },{
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
        },{
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
        },{
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
        },{
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
        },{
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
        },{
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
        },{
            name: "Никита",
            text: "Привет чо как",
            time: "22:34"
        }]

    const chatRef = useRef<HTMLDivElement>(null);

    // Прокрутка вниз после загрузки всех сообщений
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, []);


    return (
        <>
            <Navbar />
            <div className={styles.container}>
                <div className={styles.list}>

                    <div className={styles.chatBox} ref={chatRef}>
                        {messages && messages.map((msg) => (
                            <>
                                <Message
                                    name={msg.name}
                                    text={msg.text}
                                    time={msg.time}/>
                                {/*<p className={styles.date}>4 декабря</p>*/}
                            </>
                        ))}
                    </div>

                    <input className={styles.input} placeholder="Напишите сообщение..."/>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Chat;
