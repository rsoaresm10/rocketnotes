import { Container, Profile, Logout } from "./style";
import { useAuth } from "../../hooks/auth";
import {RiShutDownLine} from "react-icons/ri"
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"


export function Header () {
    const {logOut, user} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
const navigate = useNavigate()

    function handleSignOut() {
navigate("/")
logOut()
}
    return (
        <Container>
            <Profile to = "/profile">
                <img src={avatarUrl} 
                alt={user.name} />
          

            <div>
                <span>Bem Vindo</span>
                <strong>{user.name}</strong>
            </div>
            </Profile>

            <Logout onClick={handleSignOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
        
    )
}