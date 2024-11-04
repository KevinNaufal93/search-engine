'use client'

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setInitialValue } from '../lib/features/searchSlice'
import AnimatedCard from '../components/AnimatedCard';

export default function SearchResult() {
const dispatch = useDispatch();
const results = useSelector((state) => state.search.results);
const [gradientStart, setGradientStart] = useState('');
const [gradientEnd, setGradientEnd] = useState('');

useEffect(() => {
    dispatch(setInitialValue())
    switch (true) {
        case results.metric === "Positive":
            setGradientStart('from-green-500')
            setGradientEnd('to-green-950')
            break;
        case results.metric === "Negative":
            setGradientStart('from-red-500')
            setGradientEnd('to-red-950')
            break;
        case results.metric === "Neutral":
            setGradientStart('from-blue-500')
            setGradientEnd('to-purple-600')
            break;
        default:
            break;
    }
}, [results]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <main className="flex justify-center">
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center px-8">
            {!results? (
                <p>No results found</p>
            ) : (
                // <div className={`${cardColor} py-2 px-4 rounded-full`}>
                //     <p className={`${textColor} text-center`}>{results.content}</p>
                // </div>
                <AnimatedCard content={results.content} gradientStart={gradientStart} gradientEnd={gradientEnd} />
            )}
            </div>
        </div>
      </main>
    </div>
  );
}
