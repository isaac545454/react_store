import { ComponentProps, forwardRef, InputHTMLAttributes } from "react";
import * as S from "./style";
import { InputProps } from "antd";
import { ErrorMessage } from "@hookform/error-message";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  margin?: string;
  errorExist?: boolean;
  error?: ComponentProps<typeof ErrorMessage>;
}

const Input = forwardRef<InputProps, Props>((props, ref) => {
  const { margin, title, errorExist = false, error, ...res } = props;

  console.log(ref);

  return (
    <S.Container style={{ margin }}>
      {<S.TitleInput> {title}</S.TitleInput>}
      <input
        key={error?.name}
        ref={ref}
        {...res}
        style={{ width: "100%", padding: "10px", borderRadius: "10px" }}
      />
      {errorExist && error && (
        <ErrorMessage {...error} render={({ message }) => <p>{message}</p>} />
      )}
    </S.Container>
  );
});

export default Input;
