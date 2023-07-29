import * as S from "./style";
import imageStore from "../../../public/Camada_1.png";
import imageLogo from "../../../public/LOGO.svg";

export default function Login() {
  return (
    <S.Container>
      <S.BackgroundImage src={imageStore} />
      <S.ContainerLogin>
        <S.LimitedContainer>
          <S.LogoImage src={imageLogo} />
        </S.LimitedContainer>
      </S.ContainerLogin>
    </S.Container>
  );
}
