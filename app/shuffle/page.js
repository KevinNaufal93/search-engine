'use client'

import { useRouter  } from 'next/navigation'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { setInitialValue, setSearchValue, performSearch } from '../lib/features/searchSlice'
import AnimatedCard from '../components/AnimatedCard';
import LoadingSpinner from '../components/LoadingSpinner';


export default function Shuffle() {
const dispatch = useDispatch();
const router = useRouter();
const results = useSelector((state) => state.search.results);
const status = useSelector((state) => state.search.status);
const action = useSelector((state) => state.search.currentAction);

useEffect(() => {
    dispatch(setInitialValue())
}, [results]);

useEffect(() => {
    console.log(status, action);
    if (status === 'succeeded' && action === 'search') {
      router.push('/searchResult');
    } 
  }, [status, router]);

const handleClickCard = async (value) => {
    dispatch(setSearchValue(value));
    try {
    await dispatch(performSearch(value)).unwrap()
    } catch(err) {
    console.error('Search failed:', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <main className="flex">
        <div className="grid grid-cols-3 gap-6">
            {!results ? (
                <LoadingSpinner />
            ) : Array.isArray(results) && results.length > 0 ? (
                results.map((topic, index) => (
                <AnimatedCard
                    key={index}
                    idx={index}
                    text={typeof topic.title === 'string' ? topic.title : ''}
                    sentiment={
                    typeof topic.sentiment === 'number' || typeof topic.sentiment === 'string'
                        ? topic.sentiment
                        : ''
                    }
                    onClick={handleClickCard}
                />
                ))
            ) : (
                <LoadingSpinner />
            )}
        </div>
      </main>
    </div>
  );
}
