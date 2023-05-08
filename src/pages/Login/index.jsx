import { Container, Form, Img } from "./styles";
import { Input } from "../../components/Input";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import { Link } from "react-router-dom";

export function Login (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const { logIn } = useAuth();
    function handleLogin  () {
        logIn({email, password})
    }
    return (
        <Container>
        <Form>
            <h1>Rocketnotes</h1>
            <p>Aplicação para salvar e gerenciar seus links úteis.</p>
            <h2>Faça seu login</h2>
            <Input placeholder="E-mail" 
            type="text" icon={HiMail} 
            onChange={e => setEmail(e.target.value)}
            />
            <Input placeholder="Senha" 
            type="password" 
            icon={HiLockClosed} 
            onChange={e => setPassword(e.target.value)}
            />
       
             <Button title="Entrar" onClick={handleLogin}/>
            <Link to="/logup">
        
             Criar conta
        
             </Link>
        </Form>

        <Img>

        </Img>
    </Container>
    )
}