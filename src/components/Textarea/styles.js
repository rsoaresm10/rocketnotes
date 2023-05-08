import styled from "styled-components"; 


export const Container = styled.textarea `
width: 100%;
height: 150px;
border: none;
resize: none;// para que não consiga aumentar o tamanho da caixa 
background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
color: ${({ theme }) => theme.COLORS.WHITE};
margin-bottom: 8px;
border-radius: 10px;
padding: 16px;




&::placeholder {
    
    color: ${({ theme }) => theme.COLORS.GRAY_300};
   

}




> svg {
    margin-left: 16px;
}

`;