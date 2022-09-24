import axios from "axios"
import { goToSearch } from "../routes/coordinator"
export const BASE_URL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4A"

export const Login = async (body) =>{
    const {data} = await axios.post(`${BASE_URL}rappi4/login`, body)
    return data;
}

export const loginPage = (body, clear, navigate) => {
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        goToSearch(navigate)
        clear()
      })
      .catch(err => {
        console.error(err)
      })
  }
