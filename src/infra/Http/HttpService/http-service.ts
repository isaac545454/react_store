import { AxiosInstance } from 'axios'
import { HttpServiceProps } from './types'
import { HttpProps } from '../../../presentation/types/HttpProps'

export class HttpService<IResponse, TClient extends AxiosInstance> implements HttpServiceProps<IResponse> {
	private readonly client: TClient

	constructor(client: TClient) {
		this.client = client
	}

	async exec({ endpoint = '', ...res }: HttpProps): Promise<IResponse> {
		const { data } = await this.client<IResponse>(endpoint, { ...res })
		return data
	}
}
