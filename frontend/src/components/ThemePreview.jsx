import React from 'react';

const ThemePreview = ({ themeName, isSelected, onClick }) => {
  return (
    <button
      className={`
        group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
        ${isSelected ? "bg-base-200 ring-2 ring-primary" : "hover:bg-base-200/50"}
      `}
      onClick={onClick}
    >
      <div
        className="relative h-12 w-full rounded-md overflow-hidden"
        data-theme={themeName}
      >
        <div className="absolute inset-0 flex flex-col">
          <div className="h-1/2 grid grid-cols-4 gap-px p-1">
            <div className="rounded bg-primary"></div>
            <div className="rounded bg-secondary"></div>
            <div className="rounded bg-accent"></div>
            <div className="rounded bg-neutral"></div>
          </div>
          
          <div className="h-1/2 grid grid-cols-4 gap-px p-1">
            <div className="rounded bg-info"></div>
            <div className="rounded bg-success"></div>
            <div className="rounded bg-warning"></div>
            <div className="rounded bg-error"></div>
          </div>
        </div>
      </div>
      <span className="text-[11px] font-medium truncate w-full text-center">
        {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
      </span>
    </button>
  );
};

export default ThemePreview; 