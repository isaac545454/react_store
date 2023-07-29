import * as S from "./style";
import imageStore from "../../../public/Camada_1.png";
import imageLogo from "../../../public/LOGO.svg";
import Input from "../../components/Input";
import Button from "../../components/Button";

export default function Login() {
  return (
    <S.Container>
      <S.BackgroundImage src={imageStore} />
      <S.ContainerLogin>
        <S.LimitedContainer>
          <S.LogoImage src={imageLogo} />
          <S.TitleLogin level={2} type="secondary">
            LOGIN
          </S.TitleLogin>
          <Input title="USUÁRIO:" />
          <Input title="SENHA:" />
          <Button type="primary" margin="40px 0px 16px 0px">
            ENTRAR
          </Button>
        </S.LimitedContainer>
      </S.ContainerLogin>
    </S.Container>
  );
}
