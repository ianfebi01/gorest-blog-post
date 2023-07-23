import api from '@/utils/api'

export const getPostsQueryFn = async () =>
  api.get(`/public/v2/posts`).then((res) => res.data)

export const getCommentsQueryFn = async (id: number) =>
  api.get(`/public/v2/posts/${id}/comments`).then((res) => res.data)

export const getPostDetailsQueryFn = async (id: number) =>
  api.get(`/public/v2/posts/${id}`).then((res) => res.data)

export const getUsersQueryFn = async (name: string) =>
  api.get(`/public/v2/users?name=${name}`).then((res) => res.data)

export const deleteUsersQueryFn = async (id: number) =>
  api.delete(`/public/v2/users/${id}`).then((res) => res.data)
