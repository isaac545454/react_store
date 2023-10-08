import { Login } from '../../../../presentation/pages/login'
import { ENDPOINT } from '../../../../infra/Http/HttpEndpoints/endpoint-http'
import { useHttpMutation } from '../../../../presentation/hooks/useHttpMutation'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthenticationResponse } from '../../../../domain/models/AuthenticationResponse'
import { AUTHROUTES } from '../../../../presentation/AppRouter/routes/auth'
import { loginSchema } from '../../../../domain/models/Login'
import { useAuthStore } from '../../../../presentation/stores/auth'
import { loginSchemaProps } from '../../../../domain/schemas/login'

export const MakeLogin = () => {
	const navigate = useNavigate()
	const login = useAuthStore(state => state.login)

	const HttpPostLogin = useHttpMutation<AuthenticationResponse, AxiosError, loginSchemaProps>({
		HttpService: { endpoint: ENDPOINT.login },
		options: {
			onSuccess: data => {
				login(data.user)
				navigate(AUTHROUTES.home)
			},
			onError: () => {
				toast.error('Emai ou senha invalido')
			},
		},
	})

	return <Login loginMutation={HttpPostLogin} loginSchema={loginSchema} />
}
