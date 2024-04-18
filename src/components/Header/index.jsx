import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">

            <span>UNIFACISA</span>

            </Link>
            <nav>
                <Link to="/">Courses</Link>
                <Link to="/Jogos">Study at Unifacisa</Link>
                <Link to="/Perfil">About Unifacisa</Link>
                <Link to="/Cadastro">Ombudsman</Link>
                <Link to="/detalhes"></Link>
                {/*<Link to="/Ombudsman">Ombudsman</Link>*/}
            </nav>
        </header>
    );
}

export default Header;