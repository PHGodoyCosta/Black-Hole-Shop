import styles from './Product.module.css'

function Product(props) {
    return (
        <div className={styles.product}>
            <img src={props.file} className={styles.img_camisa} alt={props.legenda} />
            <h3>{props.nomeCamisa}</h3>
            <span>{props.preco}</span>
        </div>
    )
}

export default Product