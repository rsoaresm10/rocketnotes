import { Container, Profile, Logout } from "./style";
import { useAuth } from "../../hooks/auth";
import {RiShutDownLine} from "react-icons/ri"
import { api } from "../../services/api";

export function Header () {
    const {logOut, user} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

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

            <Logout onClick={logOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
        
    )
}