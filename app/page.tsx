import { Posts } from '@/components/Posts/Posts'
import { ReactQueryHydrate } from '@/components/ReactQueryHydrate/ReactQueryHydrate'
import getQueryClient from '@/lib/getQueryClient'
import { getPostsQueryFn } from '@/queryFns/postsQueryFns'
import { dehydrate } from '@tanstack/react-query'
import Link from 'next/link'

export default async function Home() {
  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['posts'], getPostsQueryFn)
  const dehydratedState = dehydrate(queryClient)
  return (
    <>
      <ReactQueryHydrate state={dehydratedState}>
        <Posts />
      </ReactQueryHydrate>
    </>
  )
}
