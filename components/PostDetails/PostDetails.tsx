'use client'
import {
  getCommentsQueryFn,
  getPostDetailsQueryFn,
} from '@/queryFns/postsQueryFns'
import { Comments, Post } from '@/types'
import { useQuery } from '@tanstack/react-query'
import React, { FunctionComponent } from 'react'
import Comment from './Comment'
import Detail from './Detail'
import LoadingDetail from './LoadingDetail'
import LoadingComment from './LoadingComment'

interface Props {
  id: number
}
const PostDetails: FunctionComponent<Props> = ({ id }) => {
  const { data: postData, isLoading: loadingPost } = useQuery<Post>({
    queryKey: [`post-details-${id}`],
    queryFn: () => getPostDetailsQueryFn(id),
  })
  const { data: postComments, isLoading: loadingComments } = useQuery<
    Comments[]
  >({
    queryKey: [`post-details-${id}`, `post-comments-${id}`],
    queryFn: () => getCommentsQueryFn(id),
    enabled: postData && Object.keys(postData).length > 0,
  })

  return (
    <div className="flex flex-col gap-8">
      {loadingPost ? <LoadingDetail /> : <Detail postData={postData as Post} />}

      <div className="border-b-[1px] border-gray-100 w-full group-hover:border-gray-200"></div>
      {/* Comment Section */}

      <div className="flex flex-col gap-2">
        <h1 className="text-lg font-bold text-gray-900">Comments</h1>

        {loadingComments ? (
          <LoadingComment />
        ) : (
          <> {postComments?.map((item) => <Comment item={item} />)}</>
        )}
      </div>
    </div>
  )
}

export default PostDetails
