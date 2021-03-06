import PropTypes from 'prop-types';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.object,
};

export default App;
