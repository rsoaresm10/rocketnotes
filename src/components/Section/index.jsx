import { Container } from "./styles";


export function Section ({title, children}) {

return (
    <Container>
        <h2>{title}</h2> {/* indepente do conteudo, a estrutura vai ser a mesma em 2 componentes então vai ser passado o titulo e depois os elementos filhos que vao ser mudados */}
        {children} 
    </Container>
)


}