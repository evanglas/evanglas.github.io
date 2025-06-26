'use client'

import { allPosts } from 'contentlayer/generated'
import { useState, useMemo } from 'react'

export default function BlogPage() {
    const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    
    const posts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    
    // Get all unique tags and their counts
    const tagCounts = useMemo(() => {
        const counts: Record<string, number> = {}
        posts.forEach(post => {
            post.tags.forEach(tag => {
                counts[tag] = (counts[tag] || 0) + 1
            })
        })
        return counts
    }, [posts])
    
    // Filter posts based on selected tags
    const filteredPosts = useMemo(() => {
        if (selectedTags.size === 0) return posts
        return posts.filter(post => 
            Array.from(selectedTags).every(tag => post.tags.includes(tag))
        )
    }, [posts, selectedTags])
    
    const handleTagClick = (tag: string) => {
        setSelectedTags(prev => {
            const newSet = new Set(prev)
            if (newSet.has(tag)) {
                newSet.delete(tag)
            } else {
                newSet.add(tag)
            }
            return newSet
        })
    }

    const clearAllTags = () => {
        setSelectedTags(new Set())
    }

    return (
        <>
            {/* Fixed title section */}
            <div className="fixed top-0 2xl:left-64 xl:left-32 lg:left-16 md:left-0 left-0 right-0 bg-white border-b border-gray-200 z-30">
                <div className="mx-auto px-4 py-4">
                    <div className="flex items-center gap-6">
                        <h1 className="text-3xl font-bold">Blog</h1>
                        <div className="flex gap-4">
                            <a href="/about" className="text-gray-600 hover:text-gray-800 hover:underline">
                                about
                            </a>
                            <a href="/contact" className="text-gray-600 hover:text-gray-800 hover:underline">
                                contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fixed mobile hamburger menu button */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded bg-white shadow-sm"
                >
                    <div className="flex flex-col gap-1">
                        <div className="w-5 h-0.5 bg-gray-600"></div>
                        <div className="w-5 h-0.5 bg-gray-600"></div>
                        <div className="w-5 h-0.5 bg-gray-600"></div>
                    </div>
                    <span className="text-sm font-medium">Tags</span>
                </button>
            </div>

            {/* Fixed mobile tags menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fixed top-16 right-4 z-40 w-64 p-4 border border-gray-200 rounded bg-white shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-medium">Tags</h2>
                        {selectedTags.size > 0 && (
                            <button
                                onClick={clearAllTags}
                                className="text-sm text-gray-500 hover:text-gray-700"
                            >
                                Clear all
                            </button>
                        )}
                    </div>
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                        {Object.entries(tagCounts).map(([tag, count]) => (
                            <button
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                                    selectedTags.has(tag)
                                        ? 'bg-gray-200' 
                                        : 'hover:bg-gray-100'
                                }`}
                            >
                                <span className="font-medium">{tag}</span>
                                <span className="text-gray-500 ml-2">({count})</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Fixed desktop tags sidebar */}
            <div className="hidden md:block fixed top-27 2xl:left-64 xl:left-32 lg:left-16 md:left-0 w-64 z-20">
                <div className="px-4">
                    <div className="w-64">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-medium">Tags</h2>
                            {selectedTags.size > 0 && (
                                <button
                                    onClick={clearAllTags}
                                    className="text-sm text-gray-500 hover:text-gray-700"
                                >
                                    Clear all
                                </button>
                            )}
                        </div>
                        <div className="space-y-2">
                            {Object.entries(tagCounts).map(([tag, count]) => (
                                <button
                                    key={tag}
                                    onClick={() => handleTagClick(tag)}
                                    className={`block w-full text-left px-3 py-2 rounded transition-colors ${
                                        selectedTags.has(tag)
                                            ? 'bg-gray-200' 
                                            : 'hover:bg-gray-100'
                                    }`}
                                >
                                    <span className="font-medium">{tag}</span>
                                    <span className="text-gray-500 ml-2">({count})</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content with left margin to account for fixed sidebar */}
            <div className="max-w-6xl mx-auto px-4 py-8 mt-20 2xl:ml-132 xl:ml-100 lg:ml-84 md:ml-68">
                <div className="md:ml-0">
                    {/* Main content */}
                    <div className="flex-1">
                        {selectedTags.size > 0 && (
                            <div className="mb-6">
                                <span className="text-gray-600">
                                    Showing posts tagged with: {Array.from(selectedTags).join(', ')}
                                </span>
                            </div>
                        )}
                        
                        <div className="space-y-8">
                            {filteredPosts.map((post) => (
                                <article key={post._raw.flattenedPath} className="border-b border-gray-200 pb-8">
                                    <h2 className="text-xl font-medium mb-2">
                                        <a 
                                            href={`/blog/${post._raw.flattenedPath}`}
                                            className="hover:underline"
                                        >
                                            {post.title}
                                        </a>
                                    </h2>
                                    
                                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                        <time>{new Date(post.date).toLocaleDateString()}</time>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <button
                                                key={tag}
                                                onClick={() => handleTagClick(tag)}
                                                className={`px-2 py-1 text-xs rounded transition-colors ${
                                                    selectedTags.has(tag)
                                                        ? 'bg-gray-200' 
                                                        : 'bg-gray-100 hover:bg-gray-200'
                                                }`}
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>
                        
                        {filteredPosts.length === 0 && (
                            <div className="text-center py-12 text-gray-500">
                                No posts found with the selected tags.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}