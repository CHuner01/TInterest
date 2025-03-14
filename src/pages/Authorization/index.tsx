import {FieldValues, useForm} from "react-hook-form";
import {UserType} from "../../shared/types";
import styles from "./auth.module.scss"
import {authAPI} from "./authApi";
import {useNavigate} from "react-router-dom";

function AuthorizationPage() {

    const [authorizeUser, {isLoading, error}] =
        authAPI.useAuthorizeUserMutation()

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
        getValues,
    } = useForm();

    const navigate = useNavigate();

    const onSubmit = async (data: FieldValues) => {
        console.log(data)
        const newUser: UserType = {
            email: data.email,
            password: data.password
        }
        // await authorizeUser(newUser)
        navigate("/main")
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <p className={styles.title}>Авторизация</p>
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
                <div className={styles.footer}>
                    <button className={styles.button}
                            disabled={isSubmitting}
                            type="submit"
                    >Продолжить</button>
                </div>

            </form>
        </div>
    );
}

export default AuthorizationPage;