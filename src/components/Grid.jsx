import PropTypes from 'prop-types';
import styles from "../../public/css/grid.module.css";

function Grid({titles}) {
  return (
    <section id="grid" className={styles.grid}>
      <div
        className={`${styles['imagen-con-titulo']} ${styles['text-img-audio']}`} 
        style={{ backgroundImage: `url("../../../public/img/rack.jpg")` }}
      >
        <a href="#" className={styles['btn-img']}>
          <h3>{titles.rack}</h3>
        </a>
      </div>
      <div
        className={`${styles['imagen-con-titulo']} ${styles['text-img-audio']}`} 
        style={{ backgroundImage: `url("../../../public/img/audio.jpeg")` }}
      >
        <a href="#" className={styles['btn-img']}>
          <h3>{titles.audio}</h3>
        </a>
      </div>
      <div
        className={`${styles['imagen-con-titulo']} ${styles['text-img-audio']}`} 
        style={{ backgroundImage: `url("../../../public/img/cajon.png")`}}
      >
        <a href="#" className={styles['btn-img']}>
          <h3>{titles.cajones}</h3>
        </a>
      </div>
    </section>
  );
}

Grid.propTypes = {
    titles: PropTypes.shape({
      rack: PropTypes.string.isRequired,
      audio: PropTypes.string.isRequired,
      cajones: PropTypes.string.isRequired,
    }).isRequired,
 };

export default Grid;
