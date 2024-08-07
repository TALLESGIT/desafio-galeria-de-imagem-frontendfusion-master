import styled from "styled-components";

export const Container = styled.div`
overflow-x: scroll;
    
&::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

&::-webkit-scrollbar-track {
  background: transparent;   
}     

&::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.textPrimary};    
  border-radius: 20px;       
 
}

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
