'use client'

import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setInitialValue } from '../lib/features/searchSlice'

export default function SearchResult() {
const dispatch = useDispatch();
const results = useSelector((state) => state.search.results);
const [cardColor, setCardColor] = useState('');
const [textColor, setTextColor] = useState('');

useEffect(() => {
    dispatch(setInitialValue())
    switch (true) {
        case results.metric === "Positive":
            setCardColor('bg-green-950')
            setTextColor('text-white')
            break;
        case results.metric === "Negative":
            setCardColor('bg-red-950')
            setTextColor('text-white')
            break;
        case results.metric === "Neutral":
            setCardColor('bg-white')
            setTextColor('text-black')
            break;
        default:
            break;
    }
}, [results]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <main className="flex justify-center">
        <div className="flex flex-col items-center">
            <h1 className="flex text-3xl font-bold py-2 mb-8">Search result for:</h1>
            <div className="flex flex-col items-center px-8">
            {!results? (
                <p>No results found</p>
            ) : (
                <div className={`${cardColor} py-2 px-4 rounded-full`}>
                    <p className={`${textColor} text-center`}>{results.content}</p>
                </div>
            )}
            </div>
        </div>
      </main>
    </div>
  );
}
