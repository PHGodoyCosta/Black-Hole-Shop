import styles from './NavHeader.module.css'


function NavHeader() {
    return (
        <nav className={styles.nav}>
            <a href="#" className={styles.header_option}>Home</a>
            <a href="#" className={styles.header_option}>Modelos</a>
            <a href="#" className={styles.header_option}>Lojas</a>
            <a href="#" className={styles.header_option}>Contato</a>
        </nav>
    )
}

export default NavHeader