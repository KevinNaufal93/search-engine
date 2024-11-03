import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue, performSearch } from '../lib/features/searchSlice'

const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      dispatch(setSearchValue(value));
      try {
        await dispatch(performSearch(value)).unwrap();
      } catch(err) {
        console.error('Search failed:', err);
      }
    }
  };

  return (
    <div className='flex flex-col items-center '>
      <input 
        className="flex w-[40vh] bg-background py-2 rounded-lg text-center" 
        placeholder="Type here & press enter!" 
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}

export default SearchBar