import { Route, Routes } from "react-router-dom"
import PaginaBase from './../pages/PaginaBase/index';
import Home from './../pages/Home/index';
import AreaLogada from './../pages/MinhaConta/index';
import Pedidos from './../pages/MinhaConta/Pedidos/index';
import SeusDados from "../pages/MinhaConta/SeusDados";



const Rotas = () => {
    return (<Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path='/minha-conta' element={<AreaLogada />}>
            <Route path="pedidos" element={<Pedidos />} />
            <Route path="dados" element={<SeusDados />} />
         </Route>
      </Route>
    </Routes>)
}

export default Rotas