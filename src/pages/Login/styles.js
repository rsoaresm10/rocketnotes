import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div `
width: 100%;
height: 100vh;
display: grid;
grid-template-columns: 650px auto;
grid-template-areas: "content img";

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;


export const Form = styled.div `
grid-area: content;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 344px;
margin: 0 auto;
> h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 48px;
}

> p {
    margin-bottom: 48px;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
}

> h2 {
    margin-bottom: 48px; 
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
}

> a {
    margin-top: 100px;
    color: ${({ theme }) => theme.COLORS.ORANGE};


}


`;



export const Img = styled.div `
grid-area: img;
flex: 1;
background: url(${backgroundImg}) no-repeat center center;
background-size: cover;
opacity: 0.6;
`;



