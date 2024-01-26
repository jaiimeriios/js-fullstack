import Image from 'next/image';

const SinglePostPage = () => {
    return (
        <div className="blog-post-page">
            <Image
                src="/waterfall.jpg"
                alt="alt text"
                width="640"
                height="350"
            />
            <div className="blog-post-page-content">
                <h2>Title</h2>
                <p className="date">date</p>
                <Image className='author' src='/author.jpg' alt='author' width='60' height='60' />
                <p>Author</p>
                <p className="content">Blog Content</p>
            </div>
        </div>
    );
};

export default SinglePostPage;
