import { QueryKey, UseQueryOptions } from '@tanstack/react-query'
import { HttpProps } from '../../models'

export interface IGetMutation<TData, TError> {
	queryKey: QueryKey
	options?: UseQueryOptions<TData, TError>
	HttpService: HttpProps
}
