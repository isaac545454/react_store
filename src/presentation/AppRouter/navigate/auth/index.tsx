import { createBrowserRouter } from 'react-router-dom'
import { AUTHROUTES } from '../../routes/auth'
import { Product } from '../../../pages/product'

export const AuthRotes = createBrowserRouter([
	{
		path: AUTHROUTES.product,
		element: <Product />,
	},
	{
		path: '*',
		element: <Product />,
	},
])
