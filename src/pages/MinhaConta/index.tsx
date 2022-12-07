import {Link, Outlet} from "react-router-dom"

import './AreaLogada.css'
import styles from './areaLogada.module.scss'

const AreaLogada = () => {
    return (
        <>
            <div >
            <h1 className={styles.titulo}>Minha conta</h1>
            <section className={styles.AreaLogada}>
                <div>
                    <ul className={styles.navegacao}>
                        <li>
                            <Link to="/minha-conta/pedidos">Pedidos</Link>
                        </li>
                        <li>
                            <Link to="/minha-conta/trocas">Trocas</Link>
                        </li>
                        <li>
                            <Link to="/minha-conta/cupons">Cupons</Link>
                        </li>
                        <li>
                            <Link to="/minha-conta/dados">Seus dados</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.conteudo}>
                    <Outlet/>
                </div>
            </section>
            </div>
        </>
    )
}

export default AreaLogada