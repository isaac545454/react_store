import { create } from 'zustand'
import { User } from '../../domain/models/User'
import { saveToBrowserStorage } from '../../main/Factories/Storage/storageFactory'
import { useHttpQuery } from '../hooks/useHttpQuery'
import { ENDPOINT } from '../../infra/Http/HttpEndpoints/endpoint-http'

interface AuthState {
	user: User | null
	login: (user: User) => void
	logout: () => void
}

export const useAuthStore = create<AuthState>(set => {
	const { removeItem, getItem } = saveToBrowserStorage()

	return {
		user: null,
		login: user => set({ user }),
		logout: () => {
			set({ user: null })
			removeItem('accessToken')
		},
	}
})
