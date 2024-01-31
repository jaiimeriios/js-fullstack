import PostCard from '@/components/PostCard';
import { getPosts } from '@/lib/data';

// Fetch data with API
// const getData = async () => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate:3600}});
//     if (!res.ok) {
//         throw new Error('Something went wrong');
//     }
//     return res.json();
// };

const BlogPage = async () => {
    // const posts = await getData();

    const posts = await getPosts();

    return (
        <div className="container">
            <h2>Blog Page</h2>
            <div className="blog-posts">
                {posts.map((p) => (
                    <PostCard key={p.id} post={p} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;
