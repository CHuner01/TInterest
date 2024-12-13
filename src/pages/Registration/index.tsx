import InputForm from "../../shared/ui/inputForm";
import {API_URL, apiAxios} from "../../shared/config";
import {FieldValues, useForm} from "react-hook-form";
import {UserType} from "../../shared/types";
import {authorizeUser} from "../Authorization/reducers/ActionCreators";

function RegistrationPage() {
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

    function Test(email: string, password: string) {
        console.log(email, password)
    }

    function RegisterUser(email: string, password: string, url: string) {
        apiAxios.post(url, {
            "email": email,
            "password" : password
        })
            .then(function (response) {
                console.log(response);
                //записать токены в store
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("city", {
                        required: "error",
                    })}
                    placeholder="Город"
                />
                <input
                    {...register("surname", {
                        required: "error",
                    })}
                    placeholder="Фамилия"
                />
                <input
                    {...register("name", {
                        required: "error",
                    })}
                    placeholder="Имя"
                />
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
                <input
                    {...register("confirmPassword", {
                        required: "error",
                    })}
                    //type="password"
                    placeholder="Повторите пароль"
                />
                <button>Отправить</button>
            </form>
        </>
    );
}

export default RegistrationPage;