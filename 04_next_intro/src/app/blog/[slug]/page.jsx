import PostUser from '@/components/PostUser';
import { getPost, getUser } from '@/lib/data';
import Image from 'next/image';
import { Suspense } from 'react';

const SinglePostPage = async ({ params, searchParams }) => {

    const singlePostData = await getPost(params.slug)
    const user = await getUser(singlePostData.userId)

    return (
        <div className="blog-post-page">
            <Image
                src={`/${singlePostData.img}`}
                alt="alt text"
                width="640"
                height="350"
            />
            <div className="blog-post-page-content">
                <h2>{singlePostData.title}</h2>
                <p className="date">date</p>
                <Suspense fallback={<div>Loading user...</div>}>
                    <PostUser postUser={user} />
                </Suspense>
                <p className="content">{singlePostData.description}</p>
            </div>
        </div>
    );
};

export default SinglePostPage;
