import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import Select from '../components/select';
import Year from '../components/year';
import styles from '../styles/Home.module.css';

const Home = ({ agencies, error }) => {
  const [agenciesData, setAgenciesData] = useState(agencies);
  const [errorText, setErrorText] = useState(error);
  const [selectedAgencies, setSelectedAgencies] = useState([]);
  // const [selectedAgencies, setSelectedAgencies] = useState([5, 271]);

  /* TODO: remove later */
  useEffect(() => {
    handleAgencyFallback();
  }, []);

  const handleAgencyFallback = async () => {
    const response = await fetch('/api/agencies');
    const data = await response.json();
    console.log('data', response, data);
    setAgenciesData(data);
    setErrorText('');
  };

  // if (errorText)
  //   return (
  //     <h1>
  //       You run into an error: <div>{error}</div>
  //       But you can try
  //       <a role="button" onClick={handleAgencyFallback}>
  //         here
  //       </a>
  //       with space agencies we stored!
  //     </h1>
  //   );

  const handleAgencySelection = (selectedAgency) => {
    const { id } = selectedAgency;

    setSelectedAgencies((selectedAgencies) => {
      if (selectedAgencies.includes(id)) {
        return selectedAgencies.filter(
          (selectedAgency) => selectedAgency !== id
        );
      }
      return [...selectedAgencies, id];
    });
  };

  console.log('agenciesData', agenciesData);

  const agencyOptions = agenciesData.reduce(
    (options, currentAgency) => [
      ...options,
      {
        id: currentAgency.id,
        value: currentAgency.id,
        text: currentAgency.name,
      },
    ],
    []
  );

  console.log('agencyOptions', agencyOptions);
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

        <Select
          id="agency-select"
          label="Events from agencies:"
          value={selectedAgencies}
          options={agencyOptions}
          handleChange={handleAgencySelection}
          multiple
        />
        <Year />
      </main>

      <footer className={styles.footer}>© 2021</footer>
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  // const response = await fetch(
  //   'https://ll.thespacedevs.com/2.0.0/agencies/?limit=10&offset=10&'
  // );
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

export default Home;
