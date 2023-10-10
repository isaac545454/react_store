import { Login } from '../../../../presentation/pages/login'
import { ENDPOINT } from '../../../../infra/Http/HttpEndpoints/endpoint-http'
import { useHttpMutation } from '../../../../presentation/hooks/useHttpMutation'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthenticationResponse } from '../../../../domain/models/AuthenticationResponse'
import { AUTHROUTES } from '../../../../presentation/AppRouter/routes/auth'
import { loginSchema } from '../../../../domain/models/Login'
import { useAuthStore } from '../../../../presentation/stores/auth'
import { loginSchemaProps } from '../../../../domain/schemas/login'
import { saveToBrowserStorage } from '../../Storage/storageFactory'
import { useNotificationWithToast } from '../../Notification'
import { apiClient } from '../../../../infra/Http/HttpClient/client-config'

export const MakeLogin = () => {
	const navigate = useNavigate()
	const login = useAuthStore(state => state.login)
	const BrowserStorage = saveToBrowserStorage()
	const Notification = useNotificationWithToast()

	const { mutate, isLoading } = useHttpMutation<AuthenticationResponse, AxiosError, loginSchemaProps>({
		HttpService: { endpoint: ENDPOINT.login },
		options: {
			onSuccess: data => {
				login(data.user)
				BrowserStorage.setItem('accessToken', data.accessToken)
				Notification.success('login Realizado com sucesso')
				apiClient({ headers: { Authorization: `Bearer ${data.accessToken}` } })
				navigate(AUTHROUTES.product)
			},
			onError: () => {
				Notification.error('Emai ou senha invalido')
			},
		},
	})

	return <Login loginMutation={mutate} loginSchema={loginSchema} loginMutationLoading={isLoading} />
}
