import React from 'react'

export default function Loader() {
  return (
    <>
    {/* <div className="flex items-center justify-center h-screen">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div> */}

    <div className="p-6 space-y-4 animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-1/3"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>

    </>
  )
}
