import { AxiosError } from 'axios'
import { useHttpMutation } from '../../../presentation/hooks/useHttpMutation'
import { MutationOptions } from '@tanstack/react-query'

export const HttpMutationFactory = <Request, Response>(
	endpoint: string,
	options: MutationOptions<Response, AxiosError, Request>,
) =>
	useHttpMutation<Response, AxiosError, Request>({
		HttpService: { endpoint: endpoint },
		options: options,
	})
