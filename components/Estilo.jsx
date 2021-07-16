import styles from '../pages/css/estilo.module.css'

export default function  Estilo(props) {    
    const classAplicada = props.numero > 5 ? 'azul' : 'verde'
    
    return(
        <div>
            <div id={styles.layout}>
                <h1 className={props.numero > 5 ? styles.estilo1 : styles.estilo2}>JXS #01</h1>

            </div>
                <h2 className={props.numero > 5 ? styles.azul : styles.verde}>JSX #02</h2>

        </div>
    )
}