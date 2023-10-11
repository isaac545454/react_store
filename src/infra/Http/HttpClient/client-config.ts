import axios from 'axios'
import { saveToBrowserStorage } from '../../../main/Factories/Storage/storageFactory'

const { getItem } = saveToBrowserStorage()
const userAcess = getItem('accessToken')
const auth = {
	Authorization: `Bearer ${userAcess}`,
}
export const apiClient = axios.create({
	baseURL: 'http://localhost:8080',
	headers: userAcess && auth,
})

const a = userAcess && auth
console.log(a)
