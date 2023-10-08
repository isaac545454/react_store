import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MakeLogin } from './Factories/pages/login'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<ToastContainer />
			<MakeLogin />
		</QueryClientProvider>
	</React.StrictMode>,
)
