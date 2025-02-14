import React, {useEffect, useState} from 'react';
import Navbar from "../../widgets/navbar";
import styles from "./profile.module.scss"
import UserList from "../../widgets/user-list";
import Footer from "../../widgets/footer";
import {useForm} from "react-hook-form";
import MsgIcon from "../../app/icons/MsgIcon.png"
import SunIconLight from "../../app/icons/SunIconLight.png"
import SunIconDark from "../../app/icons/SunIconDark.png"
import MoonIconLight from "../../app/icons/MoonIconLight.png"
import MoonIconDark from "../../app/icons/MoonIconDark.png"

function ProfilePage() {

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isSubmitting},
        reset,
        getValues,
    } = useForm();


    const formValues = watch();

    useEffect(() => {

        console.log(formValues)
    }, [formValues]);



    const [theme, setTheme] = useState<string>(localStorage.getItem("theme") || "light");
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    function makeLightTheme() {
        setTheme("light")
    }

    function makeDarkTheme() {
        setTheme("dark")
    }

    function edit() {
        setEditing(true);
    }

    return (
        <>
            <Navbar />

            <div className={styles.container}>
                <form className={styles.list}>
                    <div className={styles.main}>
                        <div className={styles.photo}></div>
                        <div className={styles.info}>
                            <div className={styles.icons}>
                                {theme === "light" ?
                                    <img src={SunIconLight} alt="Icon" width={30} height={30} /> :
                                    <img src={SunIconDark} alt="Icon" width={30} height={30} onClick={makeLightTheme}/>}
                                {theme === "light" ?
                                    <img src={MoonIconLight} alt="Icon" width={30} height={30} onClick={makeDarkTheme}/> :
                                    <img src={MoonIconDark} alt="Icon" width={30} height={30} />}
                                <p className={styles.text} onClick={edit}>Редактировать</p>
                            </div>
                            <input
                                {...register("surname", {
                                    required: "error",
                                })}
                                placeholder="Фамилия*"
                                className={styles.input}
                                disabled={!editing}
                            />
                            <input
                                {...register("name", {
                                    required: "error",
                                })}
                                placeholder="Имя*"
                                className={styles.input}
                                disabled={!editing}
                            />
                            <input
                                {...register("city", {
                                    required: "error",
                                })}
                                placeholder="Город*"
                                className={styles.input}
                                disabled={!editing}
                            />
                        </div>
                    </div>

                    <input
                        {...register("birthday", {
                            required: "error",
                        })}
                        placeholder="Дата рождения*"
                        className={styles.input}
                        disabled={!editing}
                    />
                    <input
                        {...register("position", {
                            required: "error",
                        })}
                        placeholder="Должность*"
                        className={styles.input}
                        disabled={!editing}
                    />
                    <input
                        {...register("pet", {
                            required: "error",
                        })}
                        placeholder="Домашний питомец*"
                        className={styles.input}
                        disabled={!editing}
                    />
                    <input
                        {...register("view", {
                            required: "error",
                        })}
                        placeholder="Взгляды на жизнь*"
                        className={styles.input}
                        disabled={!editing}
                    />
                    <input
                        {...register("bio", {
                            required: "error",
                        })}
                        placeholder="О себе*"
                        className={styles.input}
                        disabled={!editing}
                    />

                </form>
            </div>

            <Footer />
        </>
    );
}

export default ProfilePage;
