import SendUser from "./api";
import {useState} from "react";
import InputForm from "../../shared/ui/inputForm";


function AuthorizationPage() {

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
            <InputForm sendParams={Test} />
        </>
    );
}

export default AuthorizationPage;