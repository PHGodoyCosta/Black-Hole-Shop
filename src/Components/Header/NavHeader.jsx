import styles from './NavHeader.module.css'
import { Link } from 'react-router-dom'


function NavHeader() {
    return (
        <nav className={styles.nav}>
            <Link to="/" className={styles.header_option}>Home</Link>
            <Link to="#" className={styles.header_option}>Modelos</Link>
            <Link to="#" className={styles.header_option}>Lojas</Link>
            <Link to="#" className={styles.header_option}>Contato</Link>
        </nav>
    )
}

export default NavHeader