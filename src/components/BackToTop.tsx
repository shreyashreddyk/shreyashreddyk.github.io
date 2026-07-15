import React from 'react';

export function BackToTop() {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="back-to-top"
      onClick={handleClick}
      className="relative group w-fit flex pl-8 pr-3 py-1.5 flex-nowrap rounded border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out"
      aria-label="Back to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="absolute top-1/2 left-2 -translate-y-1/2 size-4 stroke-2 fill-none stroke-current -rotate-90 group-hover:-translate-y-[60%] transition-transform duration-300 ease-in-out"
      >
        <line
          x1="12"
          y1="19"
          x2="12"
          y2="5"
          className="translate-y-2 group-hover:translate-y-0 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 ease-in-out"
        />
        <polyline
          points="5 12 12 5 19 12"
          className="translate-y-1 group-hover:translate-y-0 transition-transform duration-300 ease-in-out"
        />
      </svg>
      <div className="text-sm">Back to top</div>
    </button>
  );
}
