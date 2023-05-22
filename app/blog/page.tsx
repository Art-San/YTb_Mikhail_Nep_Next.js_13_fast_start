import { Metadata } from 'next'
import Link from 'next/link'

async function getData() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        // 'https://jsonplaceholder.typicode.com/postsWER',
        {
            // WER сломали чтоб получить ошибку
            next: {
                revalidate: 60 // запрос насервер раз в 60 сек
            }
        }
    )

    if (!response.ok) throw new Error('Uneble to fetch posts!')

    return response.json()
}

export const metadata: Metadata = {
    title: 'Blog | Next App'
}
export default async function Blog() {
    const posts = await getData()
    return (
        <>
            <h1>Blog page</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
