import React from 'react';
import { THEMES } from '../constants';

const ThemeTester = () => {
  const applyTheme = (themeName) => {
    document.documentElement.setAttribute('data-theme', themeName);
  };

  return (
    <div className="p-4 bg-base-100 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Theme Tester</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {THEMES.map((theme) => (
          <button
            key={theme}
            className="btn btn-sm"
            onClick={() => applyTheme(theme)}
          >
            {theme}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeTester; 