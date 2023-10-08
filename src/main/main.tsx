import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { RouterProvider } from 'react-router-dom'
import { notAuth } from '../presentation/AppRouter/navigate/notAuth'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ToastContainer />
			<RouterProvider router={notAuth} />
		</QueryClientProvider>
	</React.StrictMode>,
)
