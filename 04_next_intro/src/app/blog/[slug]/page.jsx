import PostUser from '@/components/PostUser';
import Image from 'next/image';
import { Suspense } from 'react';

const getSinglePostData = async (postId) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
        throw new Error('Something went wrong');
    }
    return res.json();
};

const SinglePostPage = async ({ params, searchParams }) => {
    const singlePostData = await getSinglePostData(params.slug);

    return (
        <div className="blog-post-page">
            <Image
                src="/waterfall.jpg"
                alt="alt text"
                width="640"
                height="350"
            />
            <div className="blog-post-page-content">
                <h2>{singlePostData.title}</h2>
                <p className="date">date</p>
                <Suspense fallback={<div>Loading user...</div>}>
                    <PostUser user={singlePostData.userId} />
                </Suspense>
                <p className="content">{singlePostData.body}</p>
            </div>
        </div>
    );
};

export default SinglePostPage;
