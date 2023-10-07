import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MakeLogin } from './Factories/pages/login'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<MakeLogin />
		</QueryClientProvider>
	</React.StrictMode>,
)
