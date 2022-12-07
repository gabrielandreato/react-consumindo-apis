import styles from './seusDados.module.scss';

const SeusDados = () => {
    return (
        <div className={styles.AreaLogada}>
        <h1>Seus Dados</h1>
            <ul>
                <li>Nome:</li>
                <li>Endereço: </li>
            </ul>

        </div>

    )
}

export default SeusDados