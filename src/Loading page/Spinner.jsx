import React from 'react'

const Spinner = () => {
  return (
    <div role="status" class="flex justify-center items-center">
    <svg
      aria-hidden="true"
      class="w-24 h-24 animate-spin"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="text-gray-200"
        stroke="currentColor"
        stroke-width="5"
        fill="none"
        cx="25"
        cy="25"
        r="20"
        stroke-dasharray="150"
        stroke-dashoffset="75"
      />
      <circle
        class="text-red-500"
        stroke="url(#gradient)"
        stroke-width="5"
        fill="none"
        cx="25"
        cy="25"
        r="20"
        stroke-dasharray="150"
        stroke-dashoffset="75"
        stroke-linecap="round"
      />
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#DB281C" />
          <stop offset="100%" stop-color="#FFFFFF00" />
        </linearGradient>
      </defs>
    </svg>
    <span class="sr-only">Loading...</span>
  </div>
  
  )
}

export default Spinner