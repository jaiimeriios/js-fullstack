import PostCard from '@/components/PostCard';

const BlogPage = ({params, searchParams}) => {
    
    console.log(params)
    console.log(searchParams)
    
    return (
        <div className="container">
            <h2>Blog Page</h2>
            <div className="blog-posts">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    );
};

export default BlogPage;
