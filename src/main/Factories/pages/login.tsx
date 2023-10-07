import { Login } from '../../../presentation/pages/login'
import { ENDPOINT } from '../../../infra/Http/HttpEndpoints/endpoint-http'
import { ISchema } from '../../../presentation/pages/login/interface'
import { HttpMutationFactory } from '../http/HttpMutationFactory'

export const MakeLogin = () => {
	return <Login loginMutation={HttpMutationFactory<ISchema, string>(ENDPOINT.login)} />
}
