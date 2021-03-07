import { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetch from 'node-fetch';
import Head from 'next/head';

import ErrorPage from './error';
import Launcher from '../components/launcher';
import styles from '../styles/Home.module.css';

import { ThemeContext, themes } from '../context/Theme';

const Home = ({ agencies, error }) => {
  const [theme, setTheme] = useState({
    theme: themes.light,
    changeTheme,
  });
  const [agenciesData, setAgenciesData] = useState(agencies);
  const [errorText, setErrorText] = useState(error);

  function changeTheme() {
    setTheme((currentTheme) => ({
      ...currentTheme,
      theme: currentTheme.theme === themes.light ? themes.dark : themes.light,
    }));
  }

  /* TODO: remove later */
  useEffect(() => {
    handleAgencyFallback();
  }, []);

  const handleAgencyFallback = async () => {
    const response = await fetch('/api/agencies');
    const data = await response.json();
    setAgenciesData(data);
    setErrorText('');
  };

  if (errorText)
    return (
      <ErrorPage error={error}>
        {(errorStyles) => (
          <Fragment>
            <h1 className={errorStyles.subtitle}>
              Worry not our dear astronaut!
            </h1>

            <p className={errorStyles.description}>
              <a role="button" onClick={handleAgencyFallback}>
                Click here
              </a>{' '}
              if you want to see available data for offline mode!
            </p>
          </Fragment>
        )}
      </ErrorPage>
    );

  return (
    <ThemeContext.Provider value={theme}>
      <div className={`${theme.theme} ${styles.container}`}>
        <Head>
          <title>React Launcher</title>
          <link rel="icon" href="favicon.ico" />
        </Head>

        <Launcher agencies={agenciesData} />
      </div>
    </ThemeContext.Provider>
  );
};

Home.getInitialProps = async () => {
  // const response = await fetch('https://ll.thespacedevs.com/2.2.0/agencies/?featured=true');
  // const data = await response.json();
  // const agencies = data.results || [];
  // const error = data?.detail;
  // console.log('agencies', data, agencies);
  return { agencies: [], error: '' };
};

Home.propTypes = {
  agencies: PropTypes.array.isRequired,
  error: PropTypes.string,
  testId: PropTypes.string,
};

Home.defaultProps = {
  agencies: [],
  error: '',
};

export default Home;
