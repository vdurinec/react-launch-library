import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '../error-boundary';
import Select from '../select';
import Calendar from '../calendar';
import ThemeSwitch from '../theme-switch';
import styles from '../../styles/Launcher.module.css';

const Launcher = ({ agencies }) => {
  const [selectedAgencies, setSelectedAgencies] = useState([121, 44]); // preselect NASA and SpaceX

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

  const agencyOptions = agencies.length
    ? agencies.reduce(
        (options, currentAgency) => [
          ...options,
          {
            id: currentAgency.id,
            value: currentAgency.id,
            text: currentAgency.name,
          },
        ],
        []
      )
    : [];

  return (
    <Fragment>
      <ThemeSwitch />
      <h1 className={styles.title}>React Launcher</h1>
      <p className={styles.description}>
        Discover orbital launches and countdown with us!
      </p>
      <Select
        id="agency-select"
        label="Space agencies:"
        value={selectedAgencies}
        options={agencyOptions}
        handleChange={handleAgencySelection}
        multiple
      />

      {/* Place error boundary around calendar so it can catch possible render errors for all the inner components */}
      <ErrorBoundary>
        <Calendar
          selectedAgencies={selectedAgencies}
          agencies={agencyOptions}
        />
      </ErrorBoundary>

      {/* DOM (parent) node for Portals */}
      <div id="portal-root" />
    </Fragment>
  );
};

Launcher.propTypes = {
  agencies: PropTypes.array.isRequired,
  testId: PropTypes.string,
};

export default Launcher;
