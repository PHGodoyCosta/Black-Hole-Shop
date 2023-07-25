import styles from './Footer.module.css'
import Feedback from "../Feedback/Feedback"

function Footer() {
    return (
        <footer className={styles.footer}>
            <Feedback />
        </footer>
    )
}

export default Footer