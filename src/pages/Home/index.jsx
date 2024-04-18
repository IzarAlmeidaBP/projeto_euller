import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setLoginError('Formato incorreto');
      return;
    }

    try {
      if (email && password) {
        setIsLoggedIn(true);
        setLoginError('');
      } else {
        setLoginError('Por favor, insira um email e senha válidos.');
      }
    } catch (error) {
      console.error('Erro ao processar a autenticação:', error.message);
      setLoginError(
        'Erro ao processar a autenticação. Por favor, tente novamente.',
      );
    }
  };

  return (
    <>
      <Header />
      <section className="container">
        {isLoggedIn ? (
          <Link to="/Jogos" className="btn btn-red">
            Você está logado! Clique para continuar.
          </Link>
        ) : (
          <div className="apresentacao">
            <p>
              Hello, welcome to <br />
              <span>UNIFACISA</span> <br />
            </p>
            <form className="login-form" onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">password </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-green">
                Login
              </button>
              {loginError && <p className="error-message">{loginError}</p>}
              {}
              <div className="btn-container">
                <Link to="/Cadastro" className="btn btn-cadastro">
                  register
                </Link>
              </div>
            </form>
          </div>
        )}
        <figure>
          <img
            className="img-home"
            src="/undraw_educator_re_ju47.svg"
            alt="Imagem de Home"
          />
        </figure>
      </section>
      <Footer />
    </>
  );
}

export default Home;
