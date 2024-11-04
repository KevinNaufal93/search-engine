import React from 'react';

const AnimatedCard = ({idx, text, sentiment, onClick}) => {
  return (
    <div
      className={`
        relative
        w-64
        h-40
        ${sentiment === "Positive" ? 'bg-green-950' : sentiment === "Neutral" ? 'bg-yellow-500' : 'bg-red-950'}
        rounded-xl
        shadow-xl
        cursor-pointer
        transition-all
        duration-1000
        ease-in-out
        transform
        hover:scale-150
        ${idx % 2 === 0 ? 'origin-bottom-right' : 'origin-bottom-left'}
        ${idx % 2 === 0 ? 'animate-[spin-in-right_2s_ease-in-out_forwards]' : 'animate-[spin-in-left_2s_ease-in-out_forwards]'}
      `}
      onClick={() => onClick(text)}
    >
      <style>{`
        @keyframes spin-in-left {
          0% {
            transform: translateX(-100%) translateY(100%) rotate(-360deg);
          }
          100% {
            transform: translateX(0%) translateY(0%) rotate(0deg);
          }
        }
        @keyframes spin-in-right {
          0% {
            transform: translateX(100%) translateY(100%) rotate(360deg);
          }
          100% {
            transform: translateX(0%) translateY(0%) rotate(0deg);
          }
        }
      `}</style>

      <div className="absolute inset-0 w-full h-full flex items-center justify-center font-bold hover:scale-100 text-center rounded-xl hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-500">
        <p className={`p-4 text-xl ${sentiment === "Neutral" ? 'text-black' : 'text-white'} hover:text-red-950`}>{text}</p>
      </div>
    </div>
  );
};



export default AnimatedCard;