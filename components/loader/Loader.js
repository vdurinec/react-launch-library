import Launch from '../../public/launch.svg';
import styles from '../../styles/Loader.module.css';

const Loader = () => (
  <div className={styles.container}>
    <div className={styles.main}>
      <Launch className={styles.loader} />
    </div>
  </div>
);

export default Loader;
