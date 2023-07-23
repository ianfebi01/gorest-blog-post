import LoadingComment from '@/components/PostDetails/LoadingComment'
import LoadingDetail from '@/components/PostDetails/LoadingDetail'
import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col gap-8">
      <LoadingDetail />

      <div className="border-b-[1px] border-gray-100 w-full group-hover:border-gray-200"></div>

      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold text-gray-900">Comments</h1>

        <LoadingComment />
      </div>
    </div>
  )
}

export default Loading
