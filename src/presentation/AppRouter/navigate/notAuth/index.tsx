import { NOTAUTHROUTES } from '../../routes/notAuth'
import { MakeLogin } from '../../../../main/Factories/pages/login'
import { createBrowserRouter } from 'react-router-dom'

export const NotAuth = createBrowserRouter([
	{
		path: NOTAUTHROUTES.login,
		element: <MakeLogin />,
	},
	{
		path: '*',
		element: <MakeLogin />,
	},
])
