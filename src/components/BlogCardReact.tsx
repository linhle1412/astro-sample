import { useEffect } from "react"
import { getEntry, type CollectionEntry } from "astro:content";

interface Props {
    post: CollectionEntry<"blog">;
    isHighlight?: boolean;
}

const BlogCardReact = ({ post, isHighlight }: Props) => {
    useEffect(() => {
        console.log('BlogCardReact')
    })

    return <>
        <h1>{post.data.title}</h1>
    </>
}

export default BlogCardReact;