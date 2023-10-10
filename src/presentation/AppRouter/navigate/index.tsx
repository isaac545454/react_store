import { RouterProvider, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/auth'
import { AuthRotes } from './auth'
import { NotAuth } from './notAuth'
import { saveToBrowserStorage } from '../../../main/Factories/Storage/storageFactory'
import { useHttpQuery } from '../../hooks/useHttpQuery'
import { ENDPOINT } from '../../../infra/Http/HttpEndpoints/endpoint-http'
import { User } from '../../../domain/models/User'
import { AUTHROUTES } from '../routes/auth'

export const Routes = () => {
	const { user, login } = useAuthStore()
	const { getItem } = saveToBrowserStorage()
	const navigate = useNavigate()
	const userAcess = getItem('accessToken')

	useHttpQuery<User>({
		queryKey: ['getUser'],
		HttpService: {
			endpoint: ENDPOINT.getUser,
			headers: { Authorization: `Bearer ${userAcess}` },
		},
		options: {
			enabled: !!userAcess,
			onSuccess: data => {
				login(data)
				navigate(AUTHROUTES.product)
			},
		},
	})

	const routes = user ? AuthRotes : NotAuth

	return <RouterProvider router={routes} />
}
