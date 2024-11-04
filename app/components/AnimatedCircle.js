import React, { useState, useEffect  } from 'react';

const AnimatedCircle = ({content, gradientStart, gradientEnd }) => {

    const [isSpinning, setIsSpinning] = useState(false);
    useEffect(() => {
      setIsSpinning(true);
      setTimeout(() => setIsSpinning(false), 3000);
    }, [])

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
          ${isSpinning ? `from-stone-900` : gradientStart}
          ${isSpinning ? 'via-gray-50' : ''}
          ${isSpinning ? 'to-stone-800' : gradientEnd}
          rounded-full
          shadow-xl
          cursor-pointer
          transition-transform
          duration-500
          hover:scale-150
          transform
          perspective-1000
          hover:rotate-y-16
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
        <div className="absolute inset-0 w-full h-full flex items-center justify-center text-red-950 font-bold">
          <p className="transform transition-transform duration-500 group-hover:-rotate-y-16 p-4 text-center text-sm">
            {isSpinning ? 'Loading Sentiment' : content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimatedCircle;