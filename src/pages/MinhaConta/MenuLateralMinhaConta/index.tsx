import {Link} from "react-router-dom";

const MenuLateralMinhaConta = () => {
    return(
        <ul>
            <li><Link to='/minha-conta/pedidos'>Pedidos</Link></li>
            <li><Link to='/'>Trocas</Link></li>
            <li><Link to='/'>Cupons</Link></li>
            <li><Link to='/'>Seus dados</Link></li>
        </ul>
    )
}

export default MenuLateralMinhaConta