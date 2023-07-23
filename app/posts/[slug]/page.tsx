import PostDetails from '@/components/PostDetails/PostDetails'
import { Posts } from '@/components/Posts/Posts'
import { ReactQueryHydrate } from '@/components/ReactQueryHydrate/ReactQueryHydrate'
import getQueryClient from '@/lib/getQueryClient'
import {
  getCommentsQueryFn,
  getPostDetailsQueryFn,
  getPostsQueryFn,
} from '@/queryFns/postsQueryFns'
import { dehydrate } from '@tanstack/react-query'

export default async function PostsPage({
  params,
}: {
  params: { slug: string }
}) {
  const id = Number(params.slug)
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery([`post-comments-${id}`], () =>
    getPostDetailsQueryFn(id)
  )
  await queryClient.prefetchQuery([`post-details-${id}`], () =>
    getCommentsQueryFn(id)
  )
  const dehydratedState = dehydrate(queryClient)

  return (
    <ReactQueryHydrate state={dehydratedState}>
      <PostDetails id={id} />
    </ReactQueryHydrate>
  )
}
