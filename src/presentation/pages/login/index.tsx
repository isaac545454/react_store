import * as S from './style'
import imageStore from '../../../public/Camada_1.png'
import imageLogo from '../../../public/LOGO.svg'
import { Input } from '../../components/atoms/Input'
import Button from '../../components/atoms/Button'
import { useLogin } from './hook'

export function Login() {
	const { errors, handleSubmit, onSubmit, register } = useLogin()

	return (
		<S.Container>
			<S.BackgroundImage src={imageStore} />
			<S.ContainerLogin>
				<S.LimitedContainer>
					<S.LogoImage src={imageLogo} />
					<S.TitleLogin level={2} type="secondary">
						LOGIN
					</S.TitleLogin>
					<form onSubmit={handleSubmit(onSubmit)}>
						<Input title="USUÁRIO:" margin="32px 0px 0px" {...register('email')} error={{ name: 'email', errors }} />
						<Input
							title="SENHA:"
							margin="32px 0px 16px 0px"
							{...register('password')}
							error={{ name: 'password', errors }}
						/>
						<Button type="primary" margin="40px 0px 16px 0px" htmlType="submit">
							ENTRAR
						</Button>
					</form>
				</S.LimitedContainer>
			</S.ContainerLogin>
		</S.Container>
	)
}
