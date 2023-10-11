import { createBrowserRouter } from 'react-router-dom'
import { AUTHROUTES } from '../../routes/auth'
import { NotFound } from '../../../pages/404'
import MakeProduct from '../../../../main/Factories/Pages/Product'

export const AuthRotes = createBrowserRouter([
	{
		path: AUTHROUTES.product,
		element: <MakeProduct />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
])
