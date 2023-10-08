import { create } from 'zustand'
import { User } from '../../domain/models/User'
import { saveToBrowserStorage } from '../../main/Factories/Storage/storageFactory'

interface AuthState {
	user: User | null
	login: (user: User) => void
	logout: () => void
}

export const useAuthStore = create<AuthState>(set => {
	const { removeItem } = saveToBrowserStorage()
	return {
		user: null,
		login: user => set({ user }),
		logout: () => {
			set({ user: null })
			removeItem('accessToken')
		},
	}
})
