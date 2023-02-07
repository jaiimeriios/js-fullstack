import { useEffect, useState } from 'react';
import Post from '../components/Post';

const IndexPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:666/post')
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            {posts.length > 0 &&
                posts.map((post) => {
                    return <Post key={post._id} {...post} />;
                })}
        </>
    );
};

export default IndexPage;
