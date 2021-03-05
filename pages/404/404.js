import Link from 'next/link';

import styles from '../../styles/NotFound.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <a>Go home to safety</a>
      </Link>
    </div>
  );
}
