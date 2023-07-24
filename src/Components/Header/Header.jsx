import NavHeader from "./NavHeader";
import styles from './Header.module.css'
import logo from '../../images/logo.png'

function Header() {
    return (
        <header className={styles.header} >
            <img src={logo} className={styles.logo} alt="Logo do Black Hole" />
            <NavHeader />
        </header>
    )
}

export default Header;