import { UseQueryResult } from '@tanstack/react-query'
import { Products } from '../../../../domain/models/products'

export type ProductProps = {
	query: UseQueryResult<Products[], unknown>
}
