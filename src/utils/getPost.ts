import type { Post } from './getPosts'

export const getPost = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = (await response.json()) as Post
  return post
}
