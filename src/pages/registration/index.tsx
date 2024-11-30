import InputForm from "../../shared/ui/inputForm";
import {API_URL, apiAxios} from "../../shared/config";

function RegistrationPage() {

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
            <InputForm sendParams={Test} />
        </>
    );
}

export default RegistrationPage;