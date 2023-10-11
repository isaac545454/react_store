import { Result } from 'antd'
import * as S from './styles'
import { Button } from '../../components/atoms/Button'

export function NotFound() {
	return (
		<S.NotFound>
			<Result
				status="404"
				title="404"
				subTitle="Desculpe, a  pagina que  esta visitando não existe"
				extra={
					<Button type="primary" onClick={() => window.history.back()}>
						Voltar
					</Button>
				}
			/>
		</S.NotFound>
	)
}
