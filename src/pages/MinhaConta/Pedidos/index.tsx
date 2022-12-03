import Pedido from "./Pedido";
import IPedido from "../../../interfaces/IPedido";
import './Pedidos.css'
import {useEffect, useState} from "react";
import axios from "axios";
import {useObterToken} from "../../../hooks";
import {AbBotao} from "ds-alurabooks";
import pedido from "./Pedido";
import http from "../../../http";


const Pedidos = () => {

    const token = useObterToken()
    const [listaPedidos, setListaPedidos] = useState<IPedido[]>([])

    useEffect(() => {

        http.get<IPedido[]>('pedidos'
        ).then(resposta => setListaPedidos(resposta.data))
            .catch(erro => console.log(erro))
    }, [])

    const excluir = (pedidoAhSerExcluido: IPedido) => {
        http.delete(`pedidos/${pedidoAhSerExcluido.id}`)
            .then(() => {
                const listaPedidosAtualizada = listaPedidos.filter(pedido => pedido.id !== pedidoAhSerExcluido.id)
                setListaPedidos([...listaPedidosAtualizada])
            })
    }

    return (
        <div>
            <section className="pedidos">
                <h1>Meus Pedidos</h1>
                <ul>
                    {listaPedidos.map(item => (
                        <li key={item.id} className="pedido">
                            <Pedido
                                {...item}
                            />
                            <AbBotao tipo="secundario" texto="Excluir" onClick={() => excluir(item)} />
                        </li>
                    ))}
                </ul>
            </section>
        </div>

    )
}
export default Pedidos