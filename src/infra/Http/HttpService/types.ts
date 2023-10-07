import { HttpProps } from '../../../presentation/types/HttpProps'

export type HttpServiceProps<IResponse> = {
	exec: (params: HttpProps) => Promise<IResponse>
}
