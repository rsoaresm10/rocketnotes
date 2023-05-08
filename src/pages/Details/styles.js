import styled from "styled-components";
// configuração global da pagina
export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 105px auto;
grid-template-areas: 
"header"
"content";

> main {
    grid-area: content;
    overflow-y: scroll; // o scroll foi ativado apenas na area do main pois o header vai ficar fixo
    padding: 64px 0;
}
`;

// configuração global de lista
export const Links = styled.ul `
list-style: none;


> li {
    margin-top: 12px;

a {
    color: ${({theme}) => theme.COLORS.WHITE};  
}

}
`;


export const Content = styled.div`
// juntar tudo o conteudo
max-width: 550px;
margin: 0 auto;
display: flex;
flex-direction: column;


> button:first-child {
    align-self: end;
}

> h1 {
    font-size: 36px;
    font-weight: 500;
    padding-top: 64px;
}

> p {
    text-align: justify;
    margin-top: 16px;
    font-size: 16px;
}
`;