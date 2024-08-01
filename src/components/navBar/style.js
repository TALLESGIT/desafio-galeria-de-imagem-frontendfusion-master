import styled, { css } from "styled-components";

export const Container = styled.div`
    ${(props) => css`
    background-color: ${props.theme.primary};
    border: ${`1px solid ${props.theme.primary}`};
    box-shadow: ${`10px 0px 13px 39px ${props.theme.boxShadow}`};
  `}
`;

export const BtnTheme = styled.button`
  color: ${(props) => props.theme.textPrimary};
  cursor: pointer;
`;
