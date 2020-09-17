import axios from 'axios'
import Harvest from '../Entities/Harvest'
import ErrorMessage from '../Constants/ErrorMessageInterface'
import ErrorMessages from '../Constants/ErrorMessages'
import User from "../Entities/User"

const getUser = async (): Promise<User | ErrorMessage> => {
  const harvest = new Harvest()
  let userResponse: any
  try {
    userResponse = await axios.get(
      'https://api.harvestapp.com/api/v2/users/me.json',
      { headers : harvest.headers }
    )
  } catch (err) {
    console.log(err)
    return ErrorMessages[0]
  }

  const userData = {
    id: userResponse.data.id || '',
    firstName: userResponse.data.first_name || '',
    lastName: userResponse.data.last_name || '',
    email: userResponse.data.email || '',
    avatar: userResponse.data.avatar_url || '',
  }

  const user = new User(userData)
  return user
}

export default getUser