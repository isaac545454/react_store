import { ComponentProps, forwardRef } from "react";
import * as S from "./style";
import { Input as InputAntd, InputProps } from "antd";
import { ErrorMessage } from "@hookform/error-message";

interface Props extends InputProps {
  title?: string;
  margin?: string;
  errorExist?: boolean;
  error?: ComponentProps<typeof ErrorMessage>;
}

const Input = forwardRef<InputProps, Props>((props, ref) => {
  const { margin, title, errorExist = false, error, ...res } = props;
  return (
    <S.Container style={{ margin }}>
      {<S.TitleInput> {title}</S.TitleInput>}
      <InputAntd {...res} ref={ref} />
      {errorExist && error && (
        <ErrorMessage {...error} render={({ message }) => <p>{message}</p>} />
      )}
    </S.Container>
  );
});

export default Input;
