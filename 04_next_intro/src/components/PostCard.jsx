import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
    return (
        <div className="blog-post-single">
            <Image src='/waterfall.jpg' alt="alt text" width='300' height='225' />
            <h3>Title</h3>
            <p className="date">date</p>
            <p className="description">description</p>
            <Link href='blog/post'>Read More</Link>
        </div>
    );
};

export default PostCard;
