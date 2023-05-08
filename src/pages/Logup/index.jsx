import { Container, Form, Img, } from "./styles";
import { Input } from "../../components/Input";
import { HiMail, HiLockClosed, HiUser } from "react-icons/hi";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api"

export function Logup (){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

const navigate = useNavigate()
    function handleLogUp () { // função para levar os dados do estado para o banco de dados
if (!name || !email || !password) {
    return alert("Preencha todas as informações")
}
api.post("/users", {name, email, password})
.then(() => {
    alert("Usuário cadastrado com sucesso")
    navigate("/")
})
.catch(error => {
    if(error.response){
        alert(error.response.data.message) // vai mostrar a mensagem de erro da api 
    } else {
        alert("não foi possível cadastrar")
    }
})

    }

    return (
        <Container>
        <Form>
            <h1>Rocketnotes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>
            <h2>Crie sua conta</h2>
            <Input 
            placeholder="Nome" 
            type="text" 
            icon={HiUser} 
            onChange={e => setName(e.target.value)} // quando for alterado o valor de e vai ser passado para a função que atualiza o estado
            />
            <Input 
            placeholder="E-mail" 
            type="text" 
            icon={HiMail} 
            onChange={e => setEmail(e.target.value)}
            />
            <Input 
            placeholder="Senha" 
            type="password" 
            icon={HiLockClosed} 
            onChange={e => setPassword(e.target.value)}
            />
       
             <Button title="Cadastrar" onClick={handleLogUp}/>
             <Link to="/" >
        
             Voltar para o login
        
             </Link>
        </Form>

        <Img>

        </Img>
    </Container>
    )
}