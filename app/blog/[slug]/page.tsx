import 'katex/dist/katex.css'
import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer2/hooks'
import { notFound } from 'next/navigation'
import Link from 'next/link'


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
        <>
            {/* Fixed header matching blog theme */}
            <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-30">
                <div className="px-4 py-4">
                    <div className="flex items-center gap-6 2xl:ml-64 xl:ml-32 lg:ml-16 md:ml-0">
                        <h1 className="text-3xl font-bold">Blog</h1>
                        <div className="flex gap-4">
                            <Link href="/blog" className="text-gray-600 hover:text-gray-800 hover:underline">
                                all posts
                            </Link>
                            <Link href="/" className="text-gray-600 hover:text-gray-800 hover:underline">
                                about
                            </Link>
                            <a href="mailto:eglas27@gmail.com" className="text-gray-600 hover:text-gray-800 hover:underline">
                                contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-4xl mx-auto px-4 py-8 mt-20 2xl:ml-64 xl:ml-32 lg:ml-16 md:ml-0">
                <article className="prose prose-lg max-w-none">
                    {/* Post header */}
                    <header className="mb-8">
                        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                            <time>{new Date(post.date).toLocaleDateString()}</time>
                        </div>
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </header>

                    {/* Post content */}
                    <div className="prose prose-gray max-w-none">
                        <MDXContent />
                    </div>

                    {/* Back to blog link */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <Link 
                            href="/blog" 
                            className="text-gray-600 hover:text-gray-800 hover:underline"
                        >
                            ← Back to all posts
                        </Link>
                    </div>
                </article>
            </div>
        </>
    )
}