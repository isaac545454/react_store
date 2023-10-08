import { createBrowserRouter } from 'react-router-dom'
import { NOTAUTHROUTES } from '../../routes/notAuth'
import { MakeLogin } from '../../../../main/Factories/pages/login'

export const notAuth = createBrowserRouter([
	{
		path: NOTAUTHROUTES.login,
		element: <MakeLogin />,
	},
])
