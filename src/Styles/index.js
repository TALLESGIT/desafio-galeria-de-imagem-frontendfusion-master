import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        transition: 0ms.3 ease;
        font-family: "Roboto", sans-serif;
    }
`;

export const Screen = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: start;
    background-color: ${(props) => props.theme.primary};
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  width: 100%;

  ${(props) => css`
    flex-direction: ${props.direction || "column"};
    align-items: ${props.align || "center"};
    justify-content: ${props.justify || "center"};
    gap: ${props.gap || "4px"};
    padding: ${props.padding || ""};
  `}
`;

export const Typography = styled.p`
  ${(props) => css`
    font-style: ${props.style || "normal"};
    font-weight: ${props.weight || "500"};
     line-height: ${props.height || "21px"};
    color: ${props.theme.textPrimary};
  `}
`;

export const Spacer = styled.div`
  width: 100%;
  margin: ${(props) => props.margin || "20px"};
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;
