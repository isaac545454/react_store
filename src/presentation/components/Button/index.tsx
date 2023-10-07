import { ButtonProps } from './interface'
import * as S from './style'

export default function Button({ margin = '0', ...res }: ButtonProps) {
	return <S.ButtonContainer {...res} style={{ margin }} />
}
