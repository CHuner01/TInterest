import Navbar from "../../widgets/navbar";
import Footer from "../../widgets/footer";
import styles from "./chatList.module.scss"
import User from "../../entities/user";
import {ChatIconType} from "../../shared/types";
import ChatIcon from "../../entities/chatIcon";

type ChatListType = {
    chats: ChatIconType[];
}

function ChatList() {

    const chats: ChatIconType[] = [
        {
            name:"Котики",
            text:"Пошли пить молоко",
            time:"30м",
            user: true,
            unread: true,
        },
        {
            name:"Котики",
            text:"Пошли пить молоко",
            time:"30м",
            user: false,
            unread: false,
        }]


    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles.list}>
                    {chats.map((chat) => (
                        <ChatIcon
                            name={chat.name}
                            text={chat.text}
                            time={chat.time}
                            user={chat.user}
                            unread={chat.unread}
                        />
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ChatList;
