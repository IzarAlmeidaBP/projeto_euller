// Card.jsx
// Card.jsx
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';

function Card({ title, description, image, link }) {
  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <img src={image} alt={`Imagem de ${title}`} className={styles.image} />
      <p className={styles.description}>{description}</p>
      <div className={styles.footer}>
        <div className={styles.icons}>look</div>
        {/* Use o componente Link para criar o link */}
        <Link to={link} className={styles.button}>
          <span className={styles.arrow}>know more</span>
        </Link>
      </div>
    </section>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired, // Adicione uma propriedade para o link
};

export default Card;



