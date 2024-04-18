import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Perfil.module.css'; // Certifique-se de importar seus estilos

function Perfil() {
  return (
    <>
      <Header />
      <img
        className={styles.profileImage}
        src="caminho/para/sua/imagem.jpg"
        alt="Imagem do perfil"
      />
      <div className={styles.profileInfo}>
        <h2>User Name</h2>
        <p>Email: user@example.com</p>
        <p>City: Your City</p>
        <p>Age: </p>
        {/* Adicione mais informações conforme necessário */}
      </div>
      <Footer />
    </>
  );
}

export default Perfil;
