import { User } from './User'

export type AuthenticationResponse = {
	accessToken: string
	user: User
}
