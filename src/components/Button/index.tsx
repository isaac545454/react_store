import * as S from "./style";
import { ButtonProps } from "antd";

interface Props extends ButtonProps {
  margin?: string;
}

export default function Button({ margin = "0", ...res }: Props) {
  return <S.ButtonContainer {...res} style={{ margin }} />;
}
