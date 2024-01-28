import Image from "next/image";
import Link from "next/link";

const PostCard = ({post}) => {
    return (
        <div className="blog-post-single">
            <Image src='/waterfall.jpg' alt="alt text" width='300' height='225' />
            <h3>{post.title}</h3>
            <p className="date">date</p>
            <p className="description">{post.body}</p>
            <Link href={`blog/${post.id}`}>Read More</Link>
        </div>
    );
};

export default PostCard;
