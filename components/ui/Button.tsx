import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";
  
  // Sharp corners for editorial look
  const variants = {
    primary: "bg-brand-900 text-white hover:bg-brand-800 border border-transparent",
    secondary: "bg-stone-200 text-stone-900 hover:bg-stone-300 border border-transparent",
    outline: "bg-transparent text-brand-900 border border-brand-900 hover:bg-brand-50",
    text: "bg-transparent text-stone-600 hover:text-brand-900 px-0",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs tracking-wide",
    md: "h-12 px-6 text-sm tracking-wide",
    lg: "h-14 px-8 text-base tracking-wide",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${variant !== 'text' ? sizes[size] : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;