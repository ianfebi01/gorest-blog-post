import React from 'react'

const LoadingDetail = () => {
  return (
    <div className="text-center flex flex-col gap-4 mt-8 animate-pulse">
      <div className="flex justify-center">
        <div className="max-w-[200px] w-full h-[25px] bg-gray-100"></div>
      </div>
      {/* <div className="border-b-[1px] border-gray-100 w-full group-hover:border-gray-200"></div> */}
      <div className="w-full h-[20px] bg-gray-100"></div>
      <div className="w-full h-[20px] bg-gray-100"></div>
      <div className="w-full max-w-[200px] h-[20px] bg-gray-100"></div>
    </div>
  )
}

export default LoadingDetail
