import { useState, useEffect } from 'react';

/* Custom hook to check was it clicked outside of DOM node */
export default function useClickOutside(ref) {
  const [clickOutside, setClickOutside] = useState(false);

  useEffect(() => {
    /* Handler that checks was it inside or outside click, will be called on mouse down event */
    const handleClick = (e) => {
      /* Inside click */
      if (ref?.current?.contains(e.target)) {
        setClickOutside(false);
        return;
      }
      /* Outside click */
      setClickOutside(true);
    };

    /* Add custom 'mouse down' handler */
    document.addEventListener('mousedown', handleClick);

    /* ComponentWillUnmount (Cleanup) - remove event listener */
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref]);

  return clickOutside;
}
