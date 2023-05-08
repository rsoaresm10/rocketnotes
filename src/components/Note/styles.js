import styled from "styled-components";


export const Container = styled.button`
width: 100%;
background-color:  ${({theme}) => theme.COLORS.BACKGROUND_700};
border: none;
border-radius: 10px;
padding: 22px;
margin-bottom: 16px;

> h1 {
color: ${({theme}) => theme.COLORS.WHITE};
flex: 1; // para ele ocupar todo espaço dentro da tela disponivel
text-align: left;
font-weight: 700;
font-size: 24px;
}

> footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
}
`;