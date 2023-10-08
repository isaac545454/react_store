import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Routes } from '../presentation/AppRouter/navigate'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ToastContainer />
			<Routes />
		</QueryClientProvider>
	</React.StrictMode>,
)
