import { RouterProvider } from 'react-router-dom'
import { useAuthStore } from '../../stores/auth'
import { AuthRotes } from './auth'
import { NotAuth } from './notAuth'

export const Routes = () => {
	const authStore = useAuthStore(state => state.user)
	const routes = authStore ? AuthRotes : NotAuth

	return <RouterProvider router={routes} />
}
