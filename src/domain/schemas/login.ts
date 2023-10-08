import { z } from 'zod'
import { loginSchema } from '../models/Login'

export type loginSchemaProps = z.infer<typeof loginSchema>
