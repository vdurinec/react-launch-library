import { Component } from 'react';
import PropTypes from 'prop-types';

/* Cannot be functional component YET because componentDidCatch is not YET handled for functional components */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: '', errorInfo: '' };
  }

  static getDerivedStateFromError() {
    /* Update state so the next render will show the fallback UI. */
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    /* You can also log the error to an error reporting service or update state with error so you can display it on page. */
    this.setState({ error, errorInfo });
  }

  render() {
    const { hasError, error } = this.state;
    if (hasError) {
      // Render custom fallback UI
      return <h1>{error ? error.toString() : 'Something went wrong :/'}</h1>;
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default ErrorBoundary;
