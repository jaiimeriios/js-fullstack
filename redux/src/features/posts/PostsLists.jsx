import { useSelector } from 'react-redux';
import { selectAllPosts } from './postsSlice';
import AddPostForm from './AddPostForm';

import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostsLists = () => {
    const posts = useSelector(selectAllPosts);

    const orderedPosts = posts
        .slice()
        .sort((a, b) => b.date.localeCompare(a.date));

    return (
        <>
            <AddPostForm />
            <h3>Posts</h3>
            {orderedPosts.map((post) => (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content.substring(0, 100)}</p>
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                    <ReactionButtons post={post} />
                </article>
            ))}
        </>
    );
};

export default PostsLists;
