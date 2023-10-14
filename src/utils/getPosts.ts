export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = (await response.json()) as Post[]
  return posts
}
