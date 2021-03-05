import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React Launcher</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to React Launcher!</h1>

        <p className={styles.description}>
          Discover orbital launches and countdown with us!
        </p>
      </main>

      <footer className={styles.footer}>© 2021</footer>
    </div>
  );
}