import {FieldValues, useForm} from "react-hook-form";
import {UserType} from "../../shared/types";
import styles from "./style.module.scss"
import {authAPI} from "./authApi";

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

    const onSubmit = async (data: FieldValues) => {
        console.log(data.email)
        const newUser: UserType = {
            email: data.email,
            password: data.password
        }
        await authorizeUser(newUser)
    }

    return (
        <>
            <p className={styles.btn}>Текст</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("email", {
                        required: "error",
                    })}
                    placeholder="Почта"
                />
                <input
                    {...register("password", {
                        required: "error",
                    })}
                    //type="password"
                    placeholder="Пароль"
                />
                <button>Отправить</button>
            </form>
        </>
    );
}

export default AuthorizationPage;