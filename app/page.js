'use client'

import Image from "next/image";
import SearchBar from "./components/SearchBar"
import { useRouter  } from 'next/navigation'
import { useSelector } from 'react-redux';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage'
import { useEffect } from 'react';


export default function Index() {

  const results = useSelector((state) => state.search.results);
  const status = useSelector((state) => state.search.status);
  const error = useSelector((state) => state.search.error);

  const router = useRouter();
  useEffect(() => {
    const path = router.pathname;
    if (status === 'succeeded' && path !== '/searchResult') {
      router.push('/searchResult');
    }
  }, [status, router]);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-foreground">
      <main className="flex justify-center">
        <div className="flex flex-col items-center">
          {status === 'loading' && <LoadingSpinner/>}
          {status === 'idle' && 
            <>
              <h1 className="text-3xl font-bold py-2 mb-8">Search your favourite topics here!</h1>
              <SearchBar />
            </>
          }
          {status === 'failed' && <ErrorMessage message={error} /> }
        </div>
      </main>
    </div>
  );
}
