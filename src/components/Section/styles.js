import styled from "styled-components";


export const Container = styled.section `
margin: 28px 0;

> h2 {
     // linha que vai ficar abaixo do titulo no componente 
    border-bottom-width: 1px;
border-bottom-style: solid;
border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
padding-bottom: 16px;  

//CONFIGURAÇÕES GERAIS 
color: ${({theme}) => theme.COLORS.GRAY_100};
font-size: 20px;
font-weight: 400;

}
`;


