import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`;

export const TitleLogin = styled(Title)``;

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;

  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const LogoImage = styled.img`
  width: 208px;
`;

export const ContainerLogin = styled.div`
  background-color: #d9d9d9;
  width: 100%;
  max-width: 646px;
  right: 0;
  top: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 22px;
  z-index: 2;
`;

export const LimitedContainer = styled.div`
  width: 100%;
  max-width: 498px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
