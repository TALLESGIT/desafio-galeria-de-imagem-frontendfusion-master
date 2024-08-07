import styled, { css } from "styled-components";

export const Container = styled.div`
    ${(props) => css`
    background-color: ${props.theme.primary};
    border: ${`1px solid ${props.theme.primary}`};
    box-shadow: ${`9px 0px 33px 39px ${props.theme.boxShadow}`};
  `}
`;

export const BtnTheme = styled.button`
  color: ${(props) => props.theme.textPrimary};
  
`;

export const Profile = styled.div`
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
`;

export const ListIcon = styled.li`
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  color: ${(props) => props.theme.textPrimary};
  font-size: 24px;

 
`;

export const Divider = styled.div`

border: ${(props) => `1px solid ${props.theme.divider}`};
`;
