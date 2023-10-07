import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { IGetMutation } from './types'
import { createHttp } from '../../../infra'

export const useHttpQuery = <TData, TError = unknown>({
	queryKey,
	options,
	HttpService,
}: IGetMutation<TData, TError>): UseQueryResult<TData, TError> => {
	const http = createHttp<TData>()
	const data = useQuery(queryKey, () => http.exec({ ...HttpService, method: 'GET' }), options)
	return data
}
