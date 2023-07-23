'use client'

import { Post as PostType } from '@/types'
import React from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  post: PostType
  click: () => void
}

export const Post = ({ post, click }: Props) => {
  return (
    <button
      className="p-4 border rounded-lg border-gray-100 cursor-pointer group hover:border-gray-200 transition-all duration-300 ease-in-out flex flex-col text-left gap-2 shadow-card"
      onClick={click}
    >
      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
      <div className="border-b-[1px] border-gray-100 w-full group-hover:border-gray-200"></div>
      <p className="mt-2 font-normal text-sm text-gray-600 ">{post.body}</p>
    </button>
  )
}
