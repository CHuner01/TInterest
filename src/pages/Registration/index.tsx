

import {FieldValues, useForm} from "react-hook-form";
import styles from "./register.module.scss"
import {registerAPI} from "./registerApi";



function RegistrationPage() {

    const [authorizeUser, {}] = registerAPI.useAuthorizeUserMutation()

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues,
    } = useForm();

    const onSubmit = async (data: FieldValues) => {
        console.log(data)
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <p className={styles.title}>Личная информация</p>
                <input
                    {...register("city", {
                        required: "error",
                    })}
                    placeholder="Город*"
                    className={styles.input}
                />
                <input
                    {...register("surname", {
                        required: "error",
                    })}
                    placeholder="Фамилия*"
                    className={styles.input}
                />
                <input
                    {...register("name", {
                        required: "error",
                    })}
                    placeholder="Имя*"
                    className={styles.input}
                />
                <input
                    {...register("email", {
                        required: "error",
                    })}
                    placeholder="Электронная почта*"
                    className={styles.input}
                />
                <input
                    {...register("password", {
                        required: "error",
                    })}
                    //type="password"
                    placeholder="Пароль*"
                    className={styles.input}
                />
                <input
                    {...register("confirmPassword", {
                        required: "error",
                    })}
                    //type="password"
                    placeholder="Повторите пароль*"
                    className={styles.input}
                />
                <div className={styles.footer}>
                    <button className={styles.button} onClick={() => {console.log("кнопка")}}>Следующая</button>
                </div>

            </form>
        </div>
    );
}

export default RegistrationPage;