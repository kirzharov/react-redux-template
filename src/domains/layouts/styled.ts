import styled from "styled-components";

const BG_COLOR = "#f6f6f6";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${BG_COLOR};
`;

export const Header = styled.nav`
  height: 60px;
  color: #fff;
  background-color: #212121;
`;

export const Main = styled.main`
  padding: 60px 32px;
`;

export const Footer = styled.footer`
  height: 90px;
  padding: 0 32px;
  background-color: ${BG_COLOR};
`;
