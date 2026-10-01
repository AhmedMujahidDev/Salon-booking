import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className='px-6 py-4'>
        <div className='relative'>
            <Search 
            size={16}
            className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'/>

            <input 
            type="text"
            placeholder='Search'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm outline-none focus:border-primary' />
        </div>
    </div>
  )
}

export default SearchBar