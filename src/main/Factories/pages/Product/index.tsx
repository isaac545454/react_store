import { ENDPOINT } from '../../../../infra/Http/HttpEndpoints/endpoint-http'
import { useHttpQuery } from '../../../../presentation/hooks/useHttpQuery'
import { Product } from '../../../../presentation/pages/product'

export default function MakeProduct() {
	const data = useHttpQuery({
		queryKey: ['getProducts'],
		HttpService: { endpoint: ENDPOINT.getProducts },
	})

	return <Product />
}
