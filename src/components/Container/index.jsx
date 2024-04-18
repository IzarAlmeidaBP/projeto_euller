// Container.jsx
import Card from './Card';
import styles from './Container.module.css';

function Container() {
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Container;