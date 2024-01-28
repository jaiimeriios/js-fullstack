import PostCard from '@/components/PostCard';

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate:3600}});
    if (!res.ok) {
        throw new Error('Something went wrong');
    }
    return res.json();
};

const BlogPage = async () => {
    const posts = await getData();

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
