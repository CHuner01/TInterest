import axios from "axios";
import {API_URL} from "../../../shared/config";

async function AuthorizeUser(email: string, password: string) {
    try {
        const response = await axios.post(API_URL + "/authenticate")
        return response.data
    }
    catch (error) {
        console.log(error)
        throw error
    }
}

export default AuthorizeUser