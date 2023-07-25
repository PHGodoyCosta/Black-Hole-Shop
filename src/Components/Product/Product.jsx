import styles from './Product.module.css'
import { Link } from 'react-router-dom'

function Product(props) {
    return (
        <Link to="/product" className={styles.product} >
            <img src={props.file} className={styles.img_camisa} alt={props.legenda} />
            <h3>{props.nomeCamisa}</h3>
            <span>{props.preco}</span>
        </Link>
    )
}

export default Product