import { useForm } from 'react-hook-form'
import { LoginProps } from '../types/interface'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchemaProps } from '../../../../domain/schemas/login'

export const useLogin = ({ loginMutation, loginSchema }: LoginProps) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<loginSchemaProps>({
		resolver: zodResolver(loginSchema),
	})

	const onSubmit = (data: loginSchemaProps) => {
		loginMutation.mutate(data)
	}

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
	}
}
