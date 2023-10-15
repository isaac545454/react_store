import * as S from './styles'
import { Loading } from '../../components/atoms/loading'
import { ProductProps } from './types'
import { Table } from 'antd'
import { columns } from './columns'

export const Product: React.FC<ProductProps> = ({ query }) => {
	const { data, isLoading } = query

	if (isLoading) return <Loading />

	return (
		<S.Container>
			<Table columns={columns} dataSource={data} pagination={false} />
		</S.Container>
	)
}
