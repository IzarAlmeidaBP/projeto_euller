// Cadastro.jsx
import { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Cadastro.module.css';
import { Link } from 'react-router-dom';

function Cadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    ocupacao: '',
    telefone: '',
    email: '',
    tipo: '',
    carater: '',
    assunto: '',
    relato: '',
  });

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
      const token = localStorage.getItem('TokenJWT');
      const response = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Usuário cadastrado com sucesso!');
      } else {
        console.error('Erro ao cadastrar usuário');
      }
    } catch (error) {
      console.error('Erro na solicitação:', error);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.bannerContainer}>
        <img
          src={'src/assets/Unifacisa-Graduacao-Logistica-IMG1-1.png'}
          alt="Campus Unifacisa"
        />
      </div>

      <div className={styles.centeredContent}>
        <h2>
          {' '}
          <span className="text-primary">Ombudsman </span>
        </h2>
        <h3
          className="text-muted"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '18px',
            lineHeight: '1.6',
          }}
        >
          The Unifacisa Ombudsman is a mediator and democratic communication
          channel that welcomes feedback from students, teachers, staff, and the
          community at large. If you have any complaints, reports, suggestions,
          requests, or compliments, please contact us via email at{' '}
          <a
            href="mailto:ouvidoria@unifacisa.edu.br"
            style={{ color: '#059fd6', textDecoration: 'none' }}
          >
            ouvidoria@unifacisa.edu.br
          </a>{' '}
          or, if you prefer, fill out our form by clicking on the link below.
        </h3>
        <form onSubmit={handleSubmit}>
          <label>
            Full name:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="form-control"
            />
          </label>
          <br />
          <label>
            Occupation:
            <input
              type="text"
              name="ocupacao"
              value={formData.ocupacao}
              onChange={handleChange}
              required
              className="form-control"
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="tel"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
              className="form-control"
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
              className="form-control"
            />
          </label>
          <br />
          <label>
            Type:
            <input
              type="text"
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              required
              className="form-control"
            />
          </label>
          <br />
          <label>
            Character:
            <input
              type="text"
              name="carater"
              value={formData.carater}
              onChange={handleChange}
              required
              className="form-control"
            />
          </label>
          <br />
          <label>
            Subject:
            <input
              type="text"
              name="assunto"
              value={formData.assunto}
              onChange={handleChange}
              required
              className="form-control"
            />
          </label>
          <br />
          <label>
            Event Report:
            <textarea
              name="relato"
              value={formData.relato}
              onChange={handleChange}
              required
              className="form-control"
            />
          </label>
          <br />
          <div className={styles.btnContainer}>
            <Link to="/Feedback" className={styles.btnCadastro}>
              Register
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Cadastro;
