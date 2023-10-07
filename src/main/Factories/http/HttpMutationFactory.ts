import { AxiosError } from 'axios'
import { useHttpMutation } from '../../../presentation/hooks/useHttpMutation'

export const HttpMutationFactory = <Request, Response>(endpoint: string) =>
	useHttpMutation<Response, AxiosError, Request>({
		HttpService: { endpoint: endpoint },
	})
