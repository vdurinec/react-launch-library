import { Fragment } from 'react';
import PropTypes from 'prop-types';

import ErrorPage from '../error';

const ErrorWithFallback = ({ error, handleFallback }) => (
  <ErrorPage error={error}>
    {(errorStyles) => (
      <Fragment>
        <h1 className={errorStyles.subtitle}>Worry not our dear astronaut!</h1>

        <p>
          <a role="button" onClick={handleFallback}>
            Click here
          </a>{' '}
          if you want to see available data from dev API!
        </p>
      </Fragment>
    )}
  </ErrorPage>
);

ErrorWithFallback.propTypes = {
  error: PropTypes.string.isRequired,
  handleFallback: PropTypes.func.isRequired,
};

export default ErrorWithFallback;
