import { Post } from '@/types'
import React, { FunctionComponent } from 'react'

interface Props {
  postData: Post
}
const Detail: FunctionComponent<Props> = ({ postData }) => {
  return (
    <div className="text-center flex flex-col gap-4 mt-8">
      <h1 className="text-xl font-semibold text-gray-900">{postData?.title}</h1>
      {/* <div className="border-b-[1px] border-gray-100 w-full group-hover:border-gray-200"></div> */}
      <p className="font-normal text-sm text-gray-600 text-left">
        {postData?.body}
      </p>
    </div>
  )
}

export default Detail
