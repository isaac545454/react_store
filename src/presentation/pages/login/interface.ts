import { z } from 'zod'
import { schema } from './schema'
import { UseMutationResult } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export type ISchema = z.infer<typeof schema>

export type LoginProps = {
	loginMutation: UseMutationResult<string, AxiosError, ISchema>
}
