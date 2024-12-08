import SendUser from "./api";
import {FieldValues, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "../../shared/lib/hooks/redux";
import {authorizeUser} from "../../shared/lib/store/reducers/ActionCreators";
import {UserType} from "../../shared/types";


function AuthorizationPage() {
    const dispatch = useAppDispatch();
    const {user, isLoading, error} =
        useAppSelector(state => state.userReducer)
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
        dispatch(authorizeUser(newUser))
    }



    function Test(email: string, password: string) {
        console.log(email, password)
    }

    async function AuthorizeUser(email: string, password: string) {
        try {
            let data = await SendUser(email, password, "/authenticate");
            //записать токены в store
        }
        catch (error) {
            console.log(error)
        }
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