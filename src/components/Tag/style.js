import styled from "styled-components";
// styled-components serve para que seja estilizado um so componente, no caso o button
export const Container = styled.span`
  
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
margin-right: 6px;
  padding: 5px 14px;
  font-size: 12px;
  border-radius: 5px;
  font-weight: 500;
 

  &:disabled {
    opacity: 0.5;
  }


  
`;
