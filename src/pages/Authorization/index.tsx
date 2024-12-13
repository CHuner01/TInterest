
import {FieldValues, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../shared/model/hooks/redux";

import {UserType} from "../../shared/types";


function AuthorizationPage() {
    const dispatch = useAppDispatch();


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

    }



    function Test(email: string, password: string) {
        console.log(email, password)
    }

    return (
        <>
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