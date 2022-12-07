import IPedido from "../../../../interfaces/IPedido";
import {AbBotao} from 'ds-alurabooks';

const Pedido = (pedido: IPedido) => {

    const formatador = Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'})

    return (
        <>
            <div>
                <ul>
                    <li>Pedido: <b>{pedido.id}</b></li>
                    <li>Data do Pedido: <b>{new Date(pedido.data).toLocaleDateString()}</b></li>
                    <li>Valor Total: <b>{formatador.format(pedido.total)}</b></li>
                    <li>Data da Entrega <b>{new Date(pedido.entrega).toLocaleDateString()}</b></li>
                </ul>
            </div>
                <AbBotao texto="Detalhes" />

        </>
    )
}

export default Pedido;