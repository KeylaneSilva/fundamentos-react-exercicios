// usando o module.css importa local
import styles from "./integracao2.module.css"

export default function  integracao2() {
    return(
        <div id={styles.teste}>
            <h1 className={styles.vermelho}>Keylane</h1>
            <h1 className={styles.verde}>Karyne</h1>
            <h1 className={styles.azul}>Ricardo</h1>
        </div>
    )
}