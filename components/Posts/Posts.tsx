'use client'

import { getPostsQueryFn } from '@/queryFns/postsQueryFns'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Post as PostType } from '@/types'
import { Post } from './Post'
import Loading from './Loading'
import { AppDispatch, useAppSelector } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { setPostsDatas } from '@/redux/feature/posts-slice'
import { useRouter } from 'next/navigation'

export const Posts = () => {
  const dispatch = useDispatch<AppDispatch>()
  const state = useAppSelector((state) => state.postsReducer.postsDatas)

  const { data, isLoading } = useQuery<PostType[]>({
    queryKey: ['posts'],
    queryFn: getPostsQueryFn,
    onSuccess: (data) => {
      dispatch(setPostsDatas(data))
    },
  })

  // router
  const router = useRouter()

  const handleClickCard = (id: number) => {
    router.push(`posts/${id}`)
  }

  if (isLoading) {
    return <Loading />
  }
  if (!data) return <div>Not found</div>

  return (
    <div className="flex flex-col gap-4">
      {data.map((post) => (
        <Post
          post={post}
          key={post.id}
          click={() => handleClickCard(post.id)}
        />
      ))}
    </div>
  )
}
