// Cadastro.jsx
import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Ombudsman.module.css';
import { Link } from 'react-router-dom';

function Ombudsman() {
  const [formData, setFormData] = useState({
    nome: '',
    ocupacao: '',
    telefone: '',
    email: '',
    tipo: '',
    carater: '',
    assunto: '',
    relato: ''
  });

  const [setUserData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Obter o token JWT do armazenamento local (ou de onde você o estiver armazenando)
      const token = localStorage.getItem('TokenJWT');

      const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, // Incluir o token JWT no cabeçalho de autorização
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Usuário cadastrado com sucesso!');
        // Chame a função para buscar os dados do usuário após o cadastro bem-sucedido
        fetchUserData();
      } else {
        console.error('Erro ao cadastrar usuário');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('seuTokenJWT');

      const response = await fetch('http://localhost:3000/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Aqui, 'data' contém os dados dos usuários. Dependendo da estrutura do seu backend, você pode precisar ajustar isso.
        setUserData(data);
      } else {
        console.error('Erro ao buscar dados do usuário');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  const handleButtonClick = () => {
    // Navegar para a página desejada ao clicar no botão
    history.push('/');
  };

  return (
    <>
      <Header />
      <div className={styles.centeredContent}>
        <h2>Realize sua <span className={styles.redText}>Ouvidoria</span></h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome Completo:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Ocupação:
            <input
              type="text"
              name="ocupacao"
              value={formData.ocupacao}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Telefone:
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            E-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Tipo:
            <input
              type="text"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Caráter:
            <input
              type="text"
              name="carater"
              value={formData.carater}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Assunto:
            <input
              type="text"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Relato do Fato:
            <textarea
              name="relato"
              value={formData.relato}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button type="submit">Enviar</button>
          
        </form>
      </div>
      <Footer />
    </>
  );
}
   

export default Ombudsman;