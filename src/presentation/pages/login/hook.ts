import { useForm } from 'react-hook-form'
import { schema } from './schema'
import { ISchema, LoginProps } from './interface'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

export const useLogin = ({ loginMutation }: LoginProps) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<ISchema>({
		resolver: zodResolver(schema),
	})

	const onSubmit = (data: ISchema) => {
		loginMutation.mutate(data)
	}

	return {
		register,
		errors,
		handleSubmit,
		onSubmit,
	}
}
