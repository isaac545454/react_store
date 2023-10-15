import { Link } from 'react-router-dom'

export const columns = [
	{
		title: 'ID',
		dataIndex: 'id',
		key: 'id',
		render: (text: string) => <span>{text}</span>,
	},
	{
		title: 'Nome',
		dataIndex: 'name',
		key: 'name',
		render: (text: string) => <Link to="/">{text}</Link>,
	},
	{
		title: 'preço',
		dataIndex: 'price',
		key: 'price',
	},
]
