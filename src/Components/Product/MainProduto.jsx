import styles from './MainProduto.module.css'
import Product from './Product'
import camisa_einstein from '../../images/camisa_einstein.jpg'
import camisa_cagando_comunismo from '../../images/camisa_cagando_comunismo.webp'

function MainProduto () {
    const camisas = [
        {
            nome: "Camisa do Einstein",
            file: camisa_einstein,
            preco: "R$300,00",
            legenda: "Estampa de camisa Albert Einstein"
        },
        {
            nome: "Camisa Cagando para o comunismo",
            file: camisa_cagando_comunismo,
            preco: "R$200,00",
            legenda: "Estampa de camisa Cagando para o comunismo"
        }
    ]

    const randomCamisa = (array) => {
        return array[Math.floor(Math.random() * array.length)]
    }

    //Array com as 3 camisas que quero adicionar :)
    const arrayProdutos = Array.from({ length: 8 }, () => randomCamisa(camisas));

    return (
        <div className={styles.stock}>
            <div className={styles.contain_products}>
                {arrayProdutos.map((camisa, index) => (
                    <Product 
                        key={index}
                        file={camisa.file}
                        legenda={camisa.lengenda}
                        nomeCamisa={camisa.nome}
                        preco={camisa.preco}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainProduto