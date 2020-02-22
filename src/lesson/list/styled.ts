import styled from "styled-components";

export const MyBoldB = styled.b`
  color: ${({ theme }) => theme.red};
`;

type StyledPropsWithTheme = {
  theme: {
    red: string;
    green: string;
  };
};

type MySpanPropsT = {
  isShort: boolean;
} & StyledPropsWithTheme;

const shortHandler = ({ isShort, theme }: MySpanPropsT) =>
  isShort ? theme.green : theme.red;

export const MySpan = styled.span<MySpanPropsT>`
  font-size: 16px;
  color: ${shortHandler};
`;

const colorExtractor = (color: "red" | "green") => ({
  theme
}: StyledPropsWithTheme) => theme[color];

export const MyDiv = styled.div`
  margin: 16px 0;
  background-color: ${colorExtractor("red")};
  &:hover {
    background-color: ${colorExtractor("green")};
  }
`;
