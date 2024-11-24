import AuthorizeUser from "./api";


function AuthorizationPage() {

    let email: string;
    let password: string;

    async function SendUser() {
        try {
            let data = await AuthorizeUser(email, password);
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <p>Почта</p>
            <input onChange={(e) => (email = e.target.value)}/>
            <p>Пароль</p>
            <input onChange={(e) => (password = e.target.value)}/>
            <button onClick={() => console.log(email, password)}>Отправить</button>

        </>
    );
}

export default AuthorizationPage;