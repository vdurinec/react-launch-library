import { useState, useContext } from 'react';

import { themes, ThemeContext } from '../../context/Theme';
import styles from '../../styles/ThemeSwitch.module.css';

const ThemeSwitch = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  const [toggled, setToggle] = useState(theme.theme === themes.dark);

  const handleToggle = (e) => {
    setToggle((toggled) => !toggled);
    changeTheme(e);
  };

  return (
    <label className={styles.container}>
      <input type="checkbox" checked={toggled} onChange={handleToggle} />
      <span className={styles.switch} />
    </label>
  );
};

export default ThemeSwitch;
