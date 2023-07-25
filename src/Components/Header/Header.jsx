import NavHeader from "./NavHeader";
import styles from './Header.module.css'
import logo from '../../images/logo.png'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.header} >
            <Link to="/">
                <img src={logo} className={styles.logo} alt="Logo do Black Hole" />
            </Link>
            <NavHeader />
        </header>
    )
}

export default Header;