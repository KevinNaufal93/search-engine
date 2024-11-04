import React, { useState } from 'react';

const AnimatedCard = ({content, gradientStart, gradientEnd}) => {

    const [isSpinning, setIsSpinning] = useState(false);

    const handleClick = () => {
      if (!isSpinning) {
        setIsSpinning(true);
        setTimeout(() => setIsSpinning(false), 3000);
      }
    };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div 
        onClick={handleClick}
        className={`
          relative
          w-96
          h-96
          bg-gradient-to-br
          ${gradientStart}
          ${isSpinning ? `to-black` : gradientEnd}
          ${isSpinning ? `rounded-full` : `rounded-xl`}
          shadow-xl
          cursor-pointer
          transition-transform
          duration-500
          hover:scale-105
          transform
          perspective-1000
          hover:rotate-y-12
          group
          ${isSpinning ? 'animate-[spin_3s_linear]' : ''}
        `}
        style={{
            "@keyframes spin": {
              "from": {
                transform: "rotate(0deg)"
              },
              "to": {
                transform: "rotate(360deg)"
              }
            }
        }}
      >
        <style>
            {`@keyframes spin {
                from {
                transform: rotate(0deg);
                }
                to {
                transform: rotate(360deg);
                }
            }
            `}
        </style>
        <div className="absolute inset-0 w-full h-full flex items-center justify-center text-white text-2xl font-bold">
          <p className="transform transition-transform duration-500 group-hover:-rotate-y-12 px-4 py-1 text-center text-sm">
            {isSpinning ? 'Wheee!' : content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;