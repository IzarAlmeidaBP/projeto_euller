// Jogos.jsx
// Jogos.jsx
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import styles from './Jogos.module.css';

const jogosData = [
  {
    title: 'Administration',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },
  {
    title: 'Analysis and systems development',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },
  {
    title: 'Architecture and urbanism',
    // description: ',
    image: 'New Canvas.jpg',
    // link: '',
  },
  {
    title: 'Digital Graphic Design',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },
  {
    title: 'Law Studies',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },
  {
    title: 'Physical education',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },
  {
    title: 'Nursing',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },
  {
    title: 'civil Engineering',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },
  {
    title: 'Pharmacy',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },
  {
    title: 'Physiotherapy',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },
  {
    title: 'Digital games',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },
  {
    title: 'Logistics',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },

  {
    title: 'Medicine',
    // description: '',
    image: 'New Canvas.jpg',
    // link: '',
  },

  {
    title: 'veterinary Medicine',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },

  {
    title: 'Information systems',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },

  {
    title: 'Dentistry',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },

  {
    title: 'Psychology',
    // description: '',
    image: 'New Canvas.jpg',
    // link: '',
  },

  {
    title: 'Information systems',
    // description: '',
     image: 'New Canvas.jpg',
    // link: '',
  },

  

  //{ title: 'DEATH STRANDING', description: 'Descrição do Jogo 6', image: 'Sword-White.svg' },
  //{ title: 'Baldurs Gate 3', description: 'Descrição do Jogo 6', image: 'Sword-White.svg' },
  //{ title: 'The Last of Us™ Part I', description: 'Descrição do Jogo 6', image: 'Sword-White.svg' },
  //{ title: 'Diablo® IV', description: 'Descrição do Jogo 6', image: 'Sword-White.svg' },
  //{ title: 'Hollow Knight', description: 'Descrição do Jogo 6', image: 'Sword-White.svg' },
  //{ title: 'STAR WARS Jedi: Survivor™', description: 'Descrição do Jogo 6', image: 'Sword-White.svg' },
  //{ title: 'Street Fighter™ 6', description: 'Descrição do Jogo 6', image: 'Sword-White.svg' },
  //{ title: 'Detroit: Become Human', description: 'Descrição do Jogo 6', image: 'Sword-White.svg' },
  
  // Adicionar mais jogos conforme necessário
];

function Jogos() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.title}>.</h2>
        <h2 className={styles.title}>undergraduate</h2>

        <div className={styles.cardList}>
          {jogosData.map((data, index) => (
            <Card
              key={index}
              title={data.title}
              description={data.description}
              image={data.image}
              link={data.link}  // Passe o link como propriedade para o componente Card
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Jogos;
