import { Routes, Route  } from "react-router-dom"
// O ROUTES VAI ENVOLVER TODAS AS ROTAS E O ROUTE É PARA CADA UMA DAS ROTAS 

import { Login} from "../pages/Login"
import { Logup} from "../pages/Logup"


export function AuthRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/logup" element={<Logup/>}/>
        </Routes>
    )
}