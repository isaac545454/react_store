import * as S from "./style";
import { Input as InputAntd, InputProps } from "antd";

interface Props extends InputProps {
  title?: string;
}

export default function Input({ title = "", ...res }: Props) {
  return (
    <S.Container>
      {<S.TitleInput>{title}</S.TitleInput>}
      <InputAntd {...res} />
    </S.Container>
  );
}
