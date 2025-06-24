import { allPosts } from 'contentlayer/generated'

export default async function BlogPage() {
    const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return (
        <div>
            <h1>Blog</h1>
            <div>
                {posts.map((post) => (
                    <div key={post._raw.flattenedPath} className="mb-4">
                        <h2>
                            <a className="font-bold" href={`/blog/${post._raw.flattenedPath}`}>{post.title}</a>
                        </h2>
                        <div>
                            {post.tags.map((tag) => (
                                <span key={tag} className="mr-1">
                                   [ {tag} ]
                                </span>
                            ))}
                        </div>
                        <p>{new Date(post.date).toLocaleDateString()}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}