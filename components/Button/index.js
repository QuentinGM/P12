import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const Button = ({ children, onClick, classes = '' }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Define button classes based on theme and mounted state
  const buttonClasses = `text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 hover:scale-105 active:scale-100 tablet:first:ml-0 link ${classes} ${
    mounted && theme === 'dark' ? 'hover:bg-slate-600 text-white' : 'hover:bg-slate-100'
  }`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
