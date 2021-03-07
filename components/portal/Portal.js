import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Portal extends Component {
  constructor(props) {
    super(props);

    this.domNode = document.createElement('div');
    this.timeoutId;
  }

  componentDidMount() {
    this.portalRoot = document.getElementById('portal-root');
    this.portalRoot.appendChild(this.domNode);
    this.timeoutId = setTimeout(() => {
      this.domNode.scrollIntoView({
        behavior: this.domNode ? 'smooth' : 'auto',
        top: this.domNode ? this.domNode.offsetTop : 0,
      });
    }, 100);
  }

  componentWillUnmount() {
    this.portalRoot.removeChild(this.domNode);
    clearInterval(this.timeoutId);
  }

  render() {
    if (!this.domNode) return null;

    return ReactDOM.createPortal(this.props.children, this.domNode);
  }
}

Portal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  scrollTo: PropTypes.bool,
};

export default Portal;
