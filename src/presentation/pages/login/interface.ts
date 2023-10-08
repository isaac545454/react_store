import { z } from 'zod'
import { schema } from './schema'
import { UseMutationResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { AuthenticationResponse } from '../../../domain/models/AuthenticationResponse'

export type ISchema = z.infer<typeof schema>

export type LoginProps = {
	loginMutation: UseMutationResult<AuthenticationResponse, AxiosError, ISchema>
}
