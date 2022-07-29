import axios from 'axios'
const MAIN_PATH = 'http://localhost:3001'

const signup = async (signupData) => {
  try{
    const data = await axios
      .post(
        `${MAIN_PATH}/signup`,
        signupData
      )

    return data.data
  }catch(error){
    console.log(error)
  }
}

const login = async (loginData) => {
  try{
    const data = await axios.post(
      `${MAIN_PATH}/login`,
      loginData
    )

    return data.data
  }catch(error){
    console.log(error)
  }
}

export default {
  signup,
  login
}