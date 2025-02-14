
import styles from "./main.module.scss"
import Navbar from "../../widgets/navbar";
import Footer from "../../widgets/footer";
import UserList from "../../widgets/user-list";
import SearchIcon from "../../app/icons/SearchIcon.png"
import LKIcon from "../../app/icons/LKIcon.png";


function MainPage() {


    return (
        <>
            <Navbar />

            <div className={styles.container}>
                <div className={styles.list}>
                    <input placeholder="Введите запрос" className={styles.input}/>
                    <UserList />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default MainPage;