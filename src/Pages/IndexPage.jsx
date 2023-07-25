import Header from '../Components/Header/Header';
import MainProduto from '../Components/Product/MainProduto';
import styles from '../css/IndexPage.module.css'
import TitleArea from '../Components/Header/TitleArea';
import Footer from '../Components/Footer/Footer';


function IndexPage() {
  return (
    <>
      <Header />
      <TitleArea title="Black Hole" subTitle="O Buraco mais denso que você vai conhecer 😬"/>
      <main className={styles.main}>
        <MainProduto />
      </main>
      <Footer />
    </>
  );
}

export default IndexPage;
