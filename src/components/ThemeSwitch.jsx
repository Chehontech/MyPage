import { useEffect, useState } from 'react';
import { icons } from './Icon';

function ThemeSwitch() {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    const storedIsDark = localStorage.getItem('isDark') === 'true';
    setDark(storedIsDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('isDark', isDark.toString());
  }, [isDark]);

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', isDark ? 'light' : 'dark');
  }, [isDark]);

  const handleToggle = () => {
    setDark(!isDark);
  };

  return (
    <div>
      <label class="swap swap-rotate">
        <input
          type="checkbox"
          class="swap-input"
          checked={isDark}
          onChange={handleToggle}
        />

      {icons.Sun()}
      {icons.Moon()}
      </label>
    </div>
  );
}

export default ThemeSwitch;