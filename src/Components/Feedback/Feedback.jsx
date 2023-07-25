import { useState } from "react";
import Submit from "./Submit";
import styles from './Feedback.module.css'

function Feedback() {
    const [name, setName] = useState()
    const [feedback, setFeedback] = useState()

    function enviar_feedback(e) {
        e.preventDefault()
        console.log(`Enviando Feedback:\nNome: ${name}\nFeedback: ${feedback}`)
    }

    function evento_submit() {
        console.log("Apertou enter")
    }

    return (
        <div className={styles.feedback}> {/*Comentário Teste*/}
            <div className={styles.feedback_central}>
                <h1>Deixe seu feedback!</h1>
                <form className={styles.form} onSubmit={enviar_feedback}>
                    <p className={styles.central}>
                        <input type="text" className={styles.input} placeholder="Seu nome" onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    </p>
                    <p className={styles.central}>
                        <input type="text" className={styles.input} placeholder="O que achou da loja?" onChange={(e) => {
                            setFeedback(e.target.value)
                        }} />
                    </p>
                    <p className={styles.central}>
                        <Submit event={evento_submit} />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Feedback