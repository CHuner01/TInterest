import {API_URL, apiAxios} from "../../../shared/config";

async function SendUser(email: string, password: string, url: string) {
    try {
        const response = await apiAxios.post(url, {
            "email": email,
            "password" : password
        })
        return response.data
    }
    catch (error) {
        console.log(error)
        throw error
    }
}

export default SendUser