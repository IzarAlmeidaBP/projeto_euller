import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

// Estilos para o botão
const btnCadastro = {
  backgroundColor: '#16213e',
  color: '#fff',
  padding: '12px 40px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '6px',
  fontSize: '18px',
  textDecoration: 'none',
};

function Feedback() {
  const [formData, setFormData] = useState({
    feedback: '',
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
      console.log('Feedback enviado:', formData.feedback);
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
    }
  };

  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Thank you for your feedback!</h2>
        <p style={{ marginTop: '20px' }}>
          Thank you for sharing your opinions with us. We will contact you
          shortly.
        </p>
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: '20px' }}>
            <Link to="/" style={btnCadastro}>
              Back to home
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Feedback;
