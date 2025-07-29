import React, { useState } from 'react';

interface DropdownProps {
  options?: string[];
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  fullWidth?: boolean;
  rightImage?: {
    src: string;
    width: number;
    height: number;
  };
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options = ['Option 1', 'Option 2', 'Option 3'],
  placeholder = 'Select an option',
  value,
  onChange,
  disabled = false,
  fullWidth = false,
  rightImage,
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    onChange?.(option);
    setIsOpen(false);
  };

  const dropdownClasses = `
    relative flex items-center justify-between
    px-3 py-2.5 sm:px-4 sm:py-3 lg:px-[14px] lg:py-[14px]
    border border-primary-light rounded-[12px]
    bg-white text-global-2
    cursor-pointer transition-all duration-200
    hover:border-primary-background focus:outline-none focus:ring-2 focus:ring-primary-background
    ${fullWidth ? 'w-full' : 'flex-1'}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={dropdownClasses} onClick={() => !disabled && setIsOpen(!isOpen)}>
      <span className="text-sm sm:text-base text-left">
        {selectedValue || placeholder}
      </span>
      
      {rightImage && (
        <img 
          src={rightImage.src} 
          alt="Dropdown arrow" 
          className={`w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] lg:w-[${rightImage.width}px] lg:h-[${rightImage.height}px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      )}
      
      {isOpen && !disabled && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-primary-light rounded-[12px] shadow-lg z-50">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-3 py-2 sm:px-4 sm:py-2.5 lg:px-[14px] lg:py-[10px] hover:bg-gray-50 cursor-pointer text-sm sm:text-base first:rounded-t-[12px] last:rounded-b-[12px]"
              onClick={(e) => {
                e.stopPropagation();
                handleSelect(option);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;