import Navbar from "../../widgets/navbar";
import Footer from "../../widgets/footer";
import styles from "./chatList.module.scss"
import User from "../../entities/user";
import {ChatIconType} from "../../shared/types";
import ChatIcon from "../../entities/chatIcon";
import {Link} from "react-router-dom";

type ChatListType = {
    chats: ChatIconType[];
}

function ChatList() {

    const chats: ChatIconType[] = [
        {
            id:0,
            name:"Котики",
            text:"Пошли пить молоко",
            time:"30м",
            user: true,
            userName: "Кто",
            unread: true,
        },
        {
            id: 1,
            name:"Котики",
            text:"Пошли пить молоко",
            time:"30м",
            user: false,
            userName: "Кто",
            unread: false,
        }]


    return (
        <>
            <Navbar/>
            <div className={styles.container}>
                <div className={styles.list}>
                    {chats.map((chat) => (
                        <Link key={chat.id} to={`/chats/${chat.id}`} className={styles.link} >
                            <ChatIcon
                                key={chat.id}
                                id={chat.id}
                                name={chat.name}
                                text={chat.text}
                                time={chat.time}
                                userName={chat.userName}
                                user={chat.user}
                                unread={chat.unread}
                            />
                        </Link>
                    ))}
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default ChatList;
