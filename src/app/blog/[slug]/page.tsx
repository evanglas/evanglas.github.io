import 'katex/dist/katex.css'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer2/hooks'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
    const posts = allPosts.map((post) => ({
        params: { slug: post._raw.flattenedPath },
    }))

    return posts
}

export default async function Page({ params } : { params: Promise<{slug: string}> }) {
    const { slug } = await params
    const post = allPosts.find((post) => post._raw.flattenedPath === slug)
    
    if (!post) notFound()
    
    const MDXContent = getMDXComponent(post.body.code)
    
    return (
        <div className="prose prose-invert max-w-none">
        <h1>{post.title}</h1>
        <p>Rendered at {new Date().toLocaleString()}</p>
        <MDXContent />
        </div>
    )
}