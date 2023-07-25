import styles from './Submit.module.css'
import { BiSend } from 'react-icons/bi'

function Submit(props) {
    return (
        <div className={styles.enviar}>
            <BiSend />
            {/*Sim, esse IF é completamente desnecessário, e só para eu lembrar da estrutura.*/}
            {/*Não sei se vou usar ele nesse projeto, então deixei esse ai de segurança ksks*/}
            {true ? (
                <input type="submit" className={styles.inputEnviar} onClick={props.event} placeholder="Enviar"/>
            ) : (
                <p>Esse é o else</p>
            )}

            {false && <p>Essa é uma condição apenas para um If, não funciona se eu tentar por os :</p>}
        </div>
    )
} 

export default Submit;