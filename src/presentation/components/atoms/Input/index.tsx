import { forwardRef } from 'react'
import * as S from './style'
import { ErrorMessage } from '@hookform/error-message'
import { InputProps } from './interface'

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const { margin, title, error, ...res } = props

	return (
		<S.Container style={{ margin }}>
			{<S.TitleInput>{title}</S.TitleInput>}
			<input key={error?.name} ref={ref} {...res} style={{ width: '100%', padding: '10px', borderRadius: '10px' }} />
			{error?.errors && <ErrorMessage {...error} render={({ message }) => <p>{message}</p>} />}
		</S.Container>
	)
})
