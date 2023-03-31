import { useState } from 'react';

interface TooltipProps {
  text: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
}

const Tooltip = ({ text, children, position = 'bottom' }: TooltipProps) => {

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <div
        className="inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </div>

      {showTooltip && (
        <div
          className={`absolute z-10 px-2 py-1 text-xs text-white bg-gray-800 rounded-md shadow-lg bottom-full`}
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;