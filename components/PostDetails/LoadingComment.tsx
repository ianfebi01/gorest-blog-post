import React from 'react'

const LoadingComment = () => {
  const loop = [0, 0, 0, 0]
  return (
    <>
      {loop.map((item, i) => (
        <div key={i} className="flex gap-2">
          <div className="w-[30px] h-[30px] border rounded-full overflow-hidden border-gray-200 bg-gray-100"></div>
          <div className=" flex flex-col gap-2">
            <h2 className="max-w-[200px] w-full h-[25px] bg-gray-100"></h2>
            <div className="border border-none h-[80px] rounded-lg bg-gray-100 max-w-[400px] min-w-[330px] w-full p-4"></div>
          </div>
        </div>
      ))}
    </>
  )
}

export default LoadingComment
