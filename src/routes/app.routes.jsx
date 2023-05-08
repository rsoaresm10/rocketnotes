import { Routes, Route  } from "react-router-dom"
// O ROUTES VAI ENVOLVER TODAS AS ROTAS E O ROUTE É PARA CADA UMA DAS ROTAS 

import { Details} from "../pages/Details"
import { Home} from "../pages/Home"
import { New} from "../pages/New"
import { Profile} from "../pages/Profile"


export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    )
}