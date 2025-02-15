import MsgIcon from "../../app/icons/MsgIcon.png";
import {Link, useNavigate, useNavigation} from "react-router-dom";
import Footer from "../../widgets/footer";

import CampIcon from "../../app/icons/CampIcon.png";
import ComputerIcon from "../../app/icons/ComputerIcon.png"
import LKIconBlue from "../../app/icons/LKIconBlue.png"
import PhoneIcon from "../../app/icons/PhoneIcon.png"
import styles from "./stub.module.scss"

function StubPage() {
    const navigate = useNavigate();

    return (
        <>

            <nav className={styles.navbarContainer}>
                <div className={styles.nav}>
                    <div className={styles.title}>
                        <p className={styles.titleT}>T</p>
                        <p className={styles.titleIntererst}>Interest</p>
                    </div>
                    <div className={styles.icons} onClick={() => navigate("/auth")}>
                        <p className={styles.lkText}>Личный кабинет</p>
                        <img src={LKIconBlue} alt="Icon" width={30} height={30} />
                    </div>
                </div>
            </nav>

            <div className={styles.container}>
                <div className={styles.list}>
                    <div className={styles.title}>
                        <p className={styles.bigTitleT}>T</p>
                        <p className={styles.bigTitleIntererst}>Interest</p>
                    </div>
                    <p className={styles.centerText}>Приложенние, с помощью которого сотрудники Т-банк могут искать себе коллег по интересам,
                        общаться и заводить новые знакомства.</p>

                    <button className={styles.button} onClick={() => navigate("/register")}>Заполнить анкету</button>

                    <img src={ComputerIcon} alt="Icon" className={styles.pcIcon} />


                    <p className={styles.title2}>Что вас ждет</p>

                    <div className={styles.boxRow}>
                        <div className={styles.whiteBox}>
                            <p className={styles.title3}>Новые знакомства</p>
                            <p className={styles.text}>Выбирай человека по интересам и знакомься с ним!</p>
                        </div>
                        <div className={styles.whiteBoxIcon}>
                            <div className={styles.paragraph}>
                                <p className={styles.title3}>Общение каждый день</p>
                                <p className={styles.text}>Общайся с понравившимися людьми каждый день, задавай вопросы,
                                    рассказывай о себе в режиме реального времени!</p>
                            </div>
                            <img src={PhoneIcon} alt="Icon" width={120} height={140} />
                        </div>
                    </div>
                    <div className={styles.boxRow}>
                        <div className={styles.whiteBoxIcon}>
                            <div className={styles.paragraph}>
                                <p className={styles.title3}>Возможность найти людей для клуба по интересам</p>
                                <p className={styles.text}>Создавай клуб по интересам, смотрите фильмы, ходите в походы!</p>
                            </div>
                            <img src={CampIcon} alt="Icon" width={160} height={160} />
                        </div>
                        <div className={styles.whiteBox}>
                            <p className={styles.title3}>Групповые чаты</p>
                            <p className={styles.text}>Общайся в групповых чатах по интересам,
                                знакомься с еще большим количеством единомышленников,
                                обсуждайте интересные темы вместе!</p>
                        </div>
                    </div>

                    <br/>
                    <br/>

                    <div className={styles.yellowRow}>
                        <div className={styles.yellowBox}>1</div>
                        <div className={styles.whiteBoxSmall}>
                            <p className={styles.title3}>Заполни анкету</p>
                            <p className={styles.text}>Заполни анкету, нажав на кнопку выше</p>
                        </div>
                    </div>
                    <div className={styles.yellowRow}>
                        <div className={styles.yellowBox}>2</div>
                        <div className={styles.whiteBoxSmall}>
                            <p className={styles.title3}>Добавь дополнительную информацию</p>
                            <p className={styles.text}>Заполни дополнительную информацию о себе в личном кабинете</p>
                        </div>
                    </div>
                    <div className={styles.yellowRow}>
                        <div className={styles.yellowBox}>3</div>
                        <div className={styles.whiteBoxSmall}>
                            <p className={styles.title3}>Найди человека по душе</p>
                            <p className={styles.text}>Выбери из десятков людей того, кто нравится именно тебе</p>
                        </div>
                    </div>
                    <div className={styles.yellowRow}>
                        <div className={styles.yellowBox}>4</div>
                        <div className={styles.whiteBoxSmall}>
                            <p className={styles.title3}>Начинай общение</p>
                            <p className={styles.text}>Пиши понравившемуся человеку, создавай чаты, вступай в уже готовые сообщества</p>
                        </div>
                    </div>


                    <button className={styles.button} onClick={() => navigate("/register")}>Заполнить анкету</button>

                </div>
            </div>

            <Footer />

        </>
    );
}
export default StubPage;