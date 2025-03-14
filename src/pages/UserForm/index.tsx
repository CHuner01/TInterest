import styles from "../Authorization/auth.module.scss";
import {authAPI} from "../Authorization/authApi";
import {FieldValues, useForm} from "react-hook-form";
import {UserType} from "../../shared/types";
import {useNavigate} from "react-router-dom";


function UserForm () {

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
        console.log(data.email)
        const newUser: UserType = {
            email: data.email,
            password: data.password
        }
        // await authorizeUser(newUser);
        navigate("/main")

    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <p className={styles.title}>Дополнительная информация</p>
                <input
                    {...register("birthday", {
                        required: "error",
                    })}
                    placeholder="Дата рождения*"
                    className={styles.input}
                />
                <input
                    {...register("position", {
                        required: "error",
                    })}
                    placeholder="Должность в команде*"
                    className={styles.input}
                />
                <input
                    {...register("pet", {
                        required: "error",
                    })}
                    placeholder="Домашние животные*"
                    className={styles.input}
                />
                <input
                    {...register("view", {
                        required: "error",
                    })}
                    placeholder="Взгляды на жизнь*"
                    className={styles.input}
                />
                <input
                    {...register("bio", {
                        required: "error",
                    })}
                    //type="password"
                    placeholder="Немного о себе*"
                    className={styles.input}
                />
                <div className={styles.footer}>
                    <button className={styles.button}
                            disabled={isSubmitting}
                            type="submit"
                    >Завершить</button>
                </div>

            </form>
        </div>
    );
}

export default UserForm;
