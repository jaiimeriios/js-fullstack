import { getUser } from '@/lib/data';
import Image from 'next/image';

const PostUser = async ({ postUser }) => {
    const user = await getUser(postUser);

    return (
        <>
            <Image
                className="author"
                src={`/${user.img}`}
                alt="author"
                width="60"
                height="60"
            />
            <p>{user.username}</p>
        </>
    );
};

export default PostUser;
