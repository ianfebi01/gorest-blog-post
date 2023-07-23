export type Post = {
  user_id: number
  id: number
  title: string
  body: string
}
export type Comments = {
  id: number
  post_id: number
  name: string
  email: string
  body: string
}
export type User = {
  id: number
  name: string
  email: string
  gender: string
  status: string
}
