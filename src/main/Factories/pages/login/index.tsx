import { Login } from '../../../../presentation/pages/login'
import { ENDPOINT } from '../../../../infra/Http/HttpEndpoints/endpoint-http'
import { useHttpMutation } from '../../../../presentation/hooks/useHttpMutation'
import { AxiosError } from 'axios'
import { AuthenticationResponse } from '../../../../domain/models/AuthenticationResponse'
import { loginSchema } from '../../../../domain/models/Login'
import { useAuthStore } from '../../../../presentation/stores/auth'
import { loginSchemaProps } from '../../../../domain/schemas/login'
import { saveToBrowserStorage } from '../../Storage/storageFactory'
import { useNotificationWithToast } from '../../Notification'
import { useNavigate } from 'react-router-dom'
import { AUTHROUTES } from '../../../../presentation/AppRouter/routes/auth'

export const MakeLogin = () => {
	const login = useAuthStore(state => state.login)
	const BrowserStorage = saveToBrowserStorage()
	const navigate = useNavigate()
	const Notification = useNotificationWithToast()

	const { mutate, isLoading } = useHttpMutation<AuthenticationResponse, AxiosError, loginSchemaProps>({
		HttpService: { endpoint: ENDPOINT.login },
		options: {
			onSuccess: data => {
				login(data.user)
				BrowserStorage.setItem('accessToken', data.accessToken)
				Notification.success('login Realizado com sucesso')
				navigate(AUTHROUTES.product)
			},
			onError: () => {
				Notification.error('Emai ou senha invalido')
			},
		},
	})

	return <Login loginMutation={mutate} loginSchema={loginSchema} loginMutationLoading={isLoading} />
}
