import PropTypes from 'prop-types';
import styles from '../../styles/Error.module.css';

const Error = ({ error, children }) => (
  <div className={styles.container}>
    <main className={styles.main}>
      <h1 className={styles.title}>Woops - You have crashed with an error</h1>
      <p className={styles.description}>{error}</p>
      {children(styles)}
    </main>
  </div>
);

Error.propTypes = {
  error: PropTypes.string,
  children: PropTypes.func,
};

export default Error;
