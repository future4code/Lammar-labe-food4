import axios from "axios"

export const BASE_URL = 'https://us-central1-missao-newton.cloudfunctions.net/'

export const Login = async (body) =>{
    const {data} = await axios.post(`${BASE_URL}rappi4/login`, body)
    return data;
}
