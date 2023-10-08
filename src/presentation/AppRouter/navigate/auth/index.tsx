import { createBrowserRouter } from 'react-router-dom'
import { AUTHROUTES } from '../../routes/auth'

export const auth = createBrowserRouter([
	{
		path: AUTHROUTES.home,
		element: <div>HOME</div>,
	},
])
