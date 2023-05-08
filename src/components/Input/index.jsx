import { Container } from './styles'

export function Input ({icon: Icon, ...rest}){
    return (
        
        <Container>
            {Icon && <Icon size={20}/>} {/*so vai mostrar o icon caso ele exista*/}
            <input {...rest}/>
        </Container>
    )
}