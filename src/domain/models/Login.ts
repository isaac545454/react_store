import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email('email invalido').min(1, { message: 'Campo obrigatório' }),
	password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
})
