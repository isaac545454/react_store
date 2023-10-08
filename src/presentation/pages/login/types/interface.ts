import { UseMutateFunction } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { AuthenticationResponse } from '../../../../domain/models/AuthenticationResponse'
import { loginSchema } from '../../../../domain/models/Login'
import { loginSchemaProps } from '../../../../domain/schemas/login'

export type LoginProps = {
	loginMutation: UseMutateFunction<AuthenticationResponse, AxiosError, loginSchemaProps>
	loginSchema: typeof loginSchema
	loginMutationLoading: boolean
}
