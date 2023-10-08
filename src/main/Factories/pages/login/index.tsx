import { Login } from '../../../../presentation/pages/login'
import { ENDPOINT } from '../../../../infra/Http/HttpEndpoints/endpoint-http'
import { ISchema } from '../../../../presentation/pages/login/interface'
import { useHttpMutation } from '../../../../presentation/hooks/useHttpMutation'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthenticationResponse } from '../../../../domain/models/AuthenticationResponse'
import { AUTHROUTES } from '../../../../presentation/AppRouter/routes/auth'

export const MakeLogin = () => {
	const navigate = useNavigate()

	const HttpPostLogin = useHttpMutation<AuthenticationResponse, AxiosError, ISchema>({
		HttpService: { endpoint: ENDPOINT.login },
		options: {
			onSuccess: () => {
				navigate(AUTHROUTES.home)
			},
			onError: () => {
				toast.error('Emai ou senha invalido')
			},
		},
	})

	return <Login loginMutation={HttpPostLogin} />
}
