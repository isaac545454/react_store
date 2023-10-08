import { create } from 'zustand'
import { User } from '../../domain/models/User'

interface AuthState {
	user: User | null
	login: (user: User) => void
	logout: () => void
}

export const useAuthStore = create<AuthState>(set => ({
	user: null,
	login: user => set({ user }),
	logout: () => set({ user: null }),
}))
