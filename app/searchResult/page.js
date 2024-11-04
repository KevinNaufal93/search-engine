'use client'

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setInitialValue } from '../lib/features/searchSlice'
import AnimatedCircle from '../components/AnimatedCircle';

export default function SearchResult() {
const dispatch = useDispatch();
const results = useSelector((state) => state.search.results);
const [gradientStart, setGradientStart] = useState('');
const [gradientEnd, setGradientEnd] = useState('');
const [fontColor, setFontColor] = useState('');

useEffect(() => {
    dispatch(setInitialValue())
    switch (true) {
        case results.metric === "Positive":
            setGradientStart('from-green-500')
            setGradientEnd('to-green-950')
            setFontColor(`text-red-950`)
            break;
        case results.metric === "Negative":
            setGradientStart('from-red-500')
            setGradientEnd('to-red-950')
            setFontColor(`text-white`)
            break;
        case results.metric === "Neutral":
            setGradientStart('from-yellow-500')
            setGradientEnd('to-yellow-950')
            setFontColor(`text-red-950`)
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
                <AnimatedCircle content={results.content} gradientStart={gradientStart} gradientEnd={gradientEnd} fontColor={fontColor} />
            )}
            </div>
        </div>
      </main>
    </div>
  );
}
