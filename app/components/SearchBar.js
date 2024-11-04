import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchValue, performSearch, generateTopics } from '../lib/features/searchSlice'

const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      dispatch(setSearchValue(value));
      try {
        await dispatch(performSearch(value)).unwrap()
      } catch(err) {
        console.error('Search failed:', err);
      }
    }
  };

  const handlePressSearch = async () => {
    if (value && value.length > 0) {
      dispatch(setSearchValue(value));
      try {
        await dispatch(performSearch(value)).unwrap()
      } catch(err) {
        console.error('Search failed:', err);
      }
    }
  };

  const handleClickAwesome = async () => {
    try {
      const generating = await dispatch(generateTopics(value)).unwrap();
    } catch(err) {
      console.error('Search failed:', err);
    }
  }

  return (
    <div className='flex flex-col items-center '>
      <input 
        className="flex w-[90vh] bg-white py-2 rounded-lg text-center placeholder-gray text-black focus:border-sky-500" 
        placeholder="Search for anything" 
        onKeyDown={handleKeyDown}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className="flex flex-row gap-4">
        <div className="flex mt-6 bg-foreground px-6 py-2 rounded-lg cursor-pointer"
        onClick={()=>handleClickAwesome()}>
          I&apos;m feeling wild today!
        </div>
        <div className="flex mt-6 bg-foreground px-6 py-2 rounded-lg cursor-pointer"
        onClick={()=>handlePressSearch()}>
          Analyze topic!
        </div>
      </div>
    </div>
  )
}

export default SearchBar