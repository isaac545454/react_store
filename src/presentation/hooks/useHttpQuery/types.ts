import { QueryKey, UseQueryOptions } from '@tanstack/react-query'
import { HttpProps } from '../../types/HttpProps'

export interface IGetMutation<TData, TError> {
	queryKey: QueryKey
	options?: UseQueryOptions<TData, TError>
	HttpService: HttpProps
}
