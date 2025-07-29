import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  leftImage?: {
    src: string;
    width: number;
    height: number;
  };
  rightImage?: {
    src: string;
    width: number;
    height: number;
  };
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  type = 'button',
  fullWidth = false,
  leftImage,
  rightImage,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-montserrat font-semibold rounded-[12px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2 sm:gap-4 lg:gap-[16px]';
  
  const variants = {
    primary: 'bg-header-1 text-white hover:bg-blue-700 disabled:bg-gray-400 shadow-[0px_4px_152px_#888888ff]',
    secondary: 'bg-global-6 text-global-2 hover:bg-gray-100 disabled:bg-gray-100 shadow-[0px_4px_152px_#888888ff]',
    outline: 'border border-primary-light text-global-2 hover:bg-gray-50 disabled:border-gray-200 disabled:text-gray-400',
  };
  
  const sizes = {
    small: 'px-3 py-2 text-sm sm:px-4 sm:py-2.5',
    medium: 'px-4 py-2.5 text-base sm:px-6 sm:py-3 lg:px-[26px] lg:py-[14px]',
    large: 'px-6 py-3 text-lg sm:px-8 sm:py-4',
  };
  
  const buttonClasses = `
    ${baseClasses} 
    ${variants[variant]} 
    ${sizes[size]} 
    ${fullWidth ? 'w-full' : 'w-auto'} 
    ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      {...props}
    >
      {leftImage && (
        <img 
          src={leftImage.src} 
          alt="" 
          className={`w-[${leftImage.width}px] h-[${leftImage.height}px]`}
        />
      )}
      <span className="text-[14px] sm:text-[16px] lg:text-[18px] leading-[18px] sm:leading-[20px] lg:leading-[22px]">
        {children}
      </span>
      {rightImage && (
        <img 
          src={rightImage.src} 
          alt="" 
          className={`w-[${rightImage.width}px] h-[${rightImage.height}px]`}
        />
      )}
    </button>
  );
};

export default Button;