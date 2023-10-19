"use client"

import { useState } from 'react';
import styles from './styles.module.css';

export const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle('dark-theme');
  };

  return (
    <div className={styles.themeSwitch}>
      <input
        type="checkbox"
        id="themeSwitch"
        className={styles.checkbox}
        checked={isDarkMode}
        onChange={toggleTheme}
      />
      <label htmlFor="themeSwitch" className={styles.label} />
    </div>
  );
};