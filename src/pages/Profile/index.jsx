import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiCamera} from "react-icons/fi";
import { HiMail, HiLockClosed, HiUser } from "react-icons/hi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api";



export function Profile () {
    const navigate = useNavigate()
    const {user, updateProfile} = useAuth()
    const [name, setName] = useState(user.name) // pegou os dados do usuário que estão armazenados no useAuth do contexto
    const [email,setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState("")
    const [password, setPassword] = useState("")
    // imagem do perfil
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)


   async function handleProfile () {
    const updated = {
name,
email, 
password: password,
old_password: oldPassword
    }
    const userUpdated = Object.assign(user, updated) // ele reagrupa as duas formas , onde um aem a imagem do avatar e a outra os dados passados na constante
      await updateProfile({user: userUpdated, avatarFile})
    }
function handleChangeAvatar (event) {
    // função pra fazer a alteração da foto do avatar
const file = event.target.files[0]; 
setAvatarFile(file)//armazenando o arquivo no estado

const imagePreview = URL.createObjectURL(file); // criando url para o arquivo 
setAvatar(imagePreview) // passando a url do arquivo para o estado
}

function handleBack () {
    navigate(-1) // para que ele volte para rota a anterior, inves de ir pra outra camada 
      }
    return (
        <Container>
            <header>
                <button type="button" onClick={handleBack}>
                <FiArrowLeft/>
                </button>
            </header>


            <Form>
                <Avatar>
                <img src={avatar}
                alt="foto do usuario" />

                <label htmlFor="avatar">
                    <FiCamera/>
                    <input  
                    id="avatar"
                    type="file"
                    onChange={handleChangeAvatar}
                    />
                   
                                 
                    </label>
          
                </Avatar>

            <Input 
            placeholder="Nome" 
            type="text" icon={HiUser} 
            onChange={e => setName(e.target.value)}
            value={name} // valor inicial sendo passado pelo contexto
            />
            <Input 
            placeholder="E-mail" 
            type="text" icon={HiMail} 
            onChange={e => setEmail(e.target.value)}
            value={email}
            />
            <Input 
            placeholder="Senha Atual"
             type="password" icon={HiLockClosed} 
             onChange={e => setOldPassword(e.target.value)}
             />
            <Input 
            placeholder="Nova Senha" 
            type="password" icon={HiLockClosed} 
            onChange={e => setPassword(e.target.value)}
            />
            <Button title="Salvar" onClick={handleProfile}/>
            </Form>
        </Container>
    )
}