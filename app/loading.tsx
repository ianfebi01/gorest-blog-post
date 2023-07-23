import React from 'react'

const Loading = () => {
  return (
    <div className="p-4 border rounded-lg border-gray-100 cursor-pointer group hover:border-gray-200 transition-all duration-300 ease-in-out flex flex-col text-left gap-2 shadow-card animate-pulse">
      <div className="max-w-[600px] w-full h-[44px] bg-gray-100"></div>
      <div className="border-b-[1px] border-gray-100 w-full group-hover:border-gray-200"></div>
      <div className="mt-2 w-full h-[20px] bg-gray-100"></div>
    </div>
  )
}

export default Loading
