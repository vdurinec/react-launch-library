import { useState, useEffect } from 'react';

/* Custom hook to listen browser width */
export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    /* Handler that sets current window width to the state, will be called on window resize event */
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    /* Add custom 'resize' event */
    window.addEventListener('resize', handleResize);

    /* Invoke handler to update initial window size on component mount */
    handleResize();

    /* ComponentWillUnmount (Cleanup) - remove event listener */
    return () => window.removeEventListener('resize', handleResize);
  }, []); /* Ensure (with []) it will be called on mounting only */

  return windowWidth;
}
