import { UseMutationResult, useMutation } from '@tanstack/react-query'
import { IPostMutation, TRequestProps } from './types'
import { createHttp } from '../../../infra/Http/HttpClientFactory/http-client-factory'
import { HttpMethod } from '../../types/HttpType'

export const useHttpMutation = <TData, TError, TRequest>({
	options,
	HttpService,
}: IPostMutation<TData, TError, TRequest>): UseMutationResult<TData, TError, TRequestProps<TRequest>> => {
	const http = createHttp<TData>()

	const mutation = useMutation<TData, TError, TRequestProps<TRequest>>(info => {
		const { params, ...data } = info

		return http.exec({
			data: data,
			method: HttpMethod.POST,
			params: { ...params, ...HttpService.params },
			...HttpService,
		})
	}, options)

	return mutation
}
