import { createContext , useContext, useState, useEffect} from "react";
import {api} from "../services/api"

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [data, setData] =  useState({})
 async function logIn({email, password}){
try {
    const response = await api.post("/sessions", {email, password});
const {user, token} = response.data

localStorage.setItem("@rocketnotes:user", JSON.stringify(user)) // o localStorage recebe uma chave e um valor , como o user é um objeto , tem que ser feito o parse para transformar em string
// pra definir um novo conteudo dentro do localStorage, usa o setItem
localStorage.setItem("@rocketnotes:token", token)

api.defaults.headers.common['Authorization'] = `Bearer ${token}`; // está inserindo um token de autorização no header por padrão dentro da api em todas as requisições do usuário
setData({user, token}) //armazenando o estado do user e do token para ser passado dentro do contexto
} catch (error){
if (error.response) {
    alert(error.response.data.message);
} else {
    alert("não foi possível entrar");
}
}
}

 function logOut (){
     localStorage.removeItem("@rocketnotes:token")
     localStorage.removeItem("@rocketnotes:user")
// vai remover o q ficou armazenado no localStorage
     setData({}) // vai voltar o estado p um objeto vazio
 }

 async function updateProfile ({user, avatarFile}) {
try  {
    if (avatarFile) {
const fileUploadForm = new FormData() // O objeto FormData é usado para criar facilmente pares de chave-valor que representam dados a serem enviados em uma solicitação HTTP
fileUploadForm.append("avatar" , avatarFile)

const response = await api.patch("/users/avatar", fileUploadForm)
user.avatar = response.data.avatar;
    }
await api.put("/users", user)// o usuário vai vir do profile
localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

setData({user, token: data.token})
alert("perfil atualizado")
}
 catch (error){
    if (error.response) {
        alert(error.response.data.message);
    } else {
        alert("não foi possível atualizar o perfil");
    }
    }
 }
   useEffect(() => { // vai usar essa função para armazenar os dados do localStorage e manter autenticado o usuário após atualizar a página
    const token = localStorage.getItem("@rocketnotes:token")
    const user = localStorage.getItem("@rocketnotes:user")
    if(token && user) 
    {api.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
        setData({
            token,
            user: JSON.parse(user)
        })
    }

    
    }, []);
    return (
        <AuthContext.Provider value={{
            logIn, 
            logOut,
            updateProfile,
            user: data.user
        }}>
            {children}
        </AuthContext.Provider>    
        )
}

function useAuth () { // hook de autenticação
    const context = useContext(AuthContext);
    return context;
}
export { AuthProvider, useAuth }