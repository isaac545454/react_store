import { ErrorMessage } from '@hookform/error-message'
import { ComponentProps, InputHTMLAttributes } from 'react'

export type InputProps = {
	title?: string
	margin?: string
	error?: ComponentProps<typeof ErrorMessage>
} & InputHTMLAttributes<HTMLInputElement>
