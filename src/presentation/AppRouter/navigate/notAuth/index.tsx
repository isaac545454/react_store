import { MakeLogin } from '../../../../main/Factories/Pages/login'
import { NotFound } from '../../../pages/404'
import { NOTAUTHROUTES } from '../../routes/notAuth'

import { createBrowserRouter } from 'react-router-dom'

export const NotAuth = createBrowserRouter([
	{
		path: NOTAUTHROUTES.login,
		element: <MakeLogin />,
	},
	{
		path: '*',
		element: <NotFound />,
	},
])
