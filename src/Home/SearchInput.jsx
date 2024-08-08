import React from 'react'

const SearchInput = () => {
  const searchLogo = '/images/Search icon.svg'
  return (
    <div className="relative w-11/12 mx-auto">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        <img src={searchLogo} alt="Search" className="w-5 h-5 text-gray-400" />
      </span>
      <input
        type="text"
        placeholder="Search for food..."
        className="bg-gray-100 pl-10 pr-4 py-2 w-full font-roboto rounded-lg focus:outline-none"
      />
    </div>
  )
}

export default SearchInput
