'use client'

import Image from "next/image";
import SearchBar from "./components/SearchBar"
import { useRouter  } from 'next/navigation'
import { useSelector } from 'react-redux';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage'
import { useEffect } from 'react';


export default function Index() {

  const status = useSelector((state) => state.search.status);
  const error = useSelector((state) => state.search.error);
  const action = useSelector((state) => state.search.currentAction)

  const router = useRouter();
  useEffect(() => {
    if (status === 'succeeded' && action === 'search') {
      router.push('/searchResult');
    } else if (status === 'succeeded' && action === 'generate') {
      router.push('/shuffle');
    }
  }, [status, router]);


  return (
    <div className="flex flex-col min-h-screen bg-background overflow-y-auto">
      <main className="flex justify-center overflow-hidden">
        <div className="flex flex-col self-center mt-[10rem]">
          {status === 'loading' && <LoadingSpinner/>}
          {status === 'idle' && 
            <>
              <h1 className="text-[4rem] font-bold py-2 mb-8 text-center">Analyze your favourite topics here!</h1>
              <SearchBar />
            </>
          }
          {status === 'failed' && <ErrorMessage message={error} /> }
        </div>
      </main>
    </div>
  );
}
