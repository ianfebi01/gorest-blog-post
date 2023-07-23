import PostDetails from '@/components/PostDetails/PostDetails'
import { ReactQueryHydrate } from '@/components/ReactQueryHydrate/ReactQueryHydrate'
import Users from '@/components/Users/Users'
import getQueryClient from '@/lib/getQueryClient'
import {
  getPostDetailsQueryFn,
  getUsersQueryFn,
} from '@/queryFns/postsQueryFns'
import { dehydrate } from '@tanstack/react-query'

export default async function PostsPage() {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery([`users`], () => getUsersQueryFn(''))

  const dehydratedState = dehydrate(queryClient)

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <Users />
    </ReactQueryHydrate>
  )
}
