import { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import ErrorWithFallback from '../components/error-with-fallback';
import Launcher from '../components/launcher';
import { getFullData } from '../helpers/requestHandler';
import styles from '../styles/Home.module.css';

import { ThemeContext, themes } from '../context/Theme';
import { BaseApiUrlContext, API_URL, API_DEV_URL } from '../context/BaseApiUrl';

function Home({ agencies, error }) {
  const [theme, setTheme] = useState({
    theme: themes.light,
    changeTheme,
  });
  const [baseApiUrl, setBaseApiUrl] = useState({
    baseApiUrl: API_URL,
    changeBaseApiUrl,
  });
  const [agenciesData, setAgenciesData] = useState(agencies);
  const [errorText, setErrorText] = useState(error);

  function changeTheme() {
    setTheme((currentTheme) => ({
      ...currentTheme,
      theme: currentTheme.theme === themes.light ? themes.dark : themes.light,
    }));
  }

  function changeBaseApiUrl(newApiUrl) {
    setBaseApiUrl((currentApiState) => ({
      ...currentApiState,
      baseApiUrl: newApiUrl,
    }));
  }

  const handleAgencyFallback = async () => {
    changeBaseApiUrl(API_DEV_URL);
    const response = await getFullData(
      `${API_DEV_URL}/agencies/?ordering=-featured&limit=100`
    );
    setAgenciesData(response.results);
    setErrorText('');
  };

  if (errorText) {
    return (
      <ErrorWithFallback error={error} handleFallback={handleAgencyFallback} />
    );
  }

  return (
    <BaseApiUrlContext.Provider value={baseApiUrl}>
      <ThemeContext.Provider value={theme}>
        <div className={`${theme.theme} ${styles.container}`}>
          <div className={styles.main}>
            <Head>
              <title>React Launcher</title>
              <link rel="icon" href="favicon.ico" />
            </Head>

            <Launcher agencies={agenciesData} />
          </div>
        </div>
      </ThemeContext.Provider>
    </BaseApiUrlContext.Provider>
  );
}

Home.getInitialProps = async () => {
  const response = await getFullData(
    `${API_URL}/agencies/?ordering=-featured&limit=100`
  );
  const agencies = response?.results || [];
  const error = response?.detail;

  return { agencies, error };
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
