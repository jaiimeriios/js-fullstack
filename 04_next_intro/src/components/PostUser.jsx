import Image from 'next/image';

const getUserData = async (userID) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userID}`,
        { next: { revalidate: 3600 } }
    );
    if (!res.ok) {
        throw new Error('Something went wrong');
    }
    return res.json();
};

const PostUser = async ({ user }) => {
    const pUser = await getUserData(user);

    return (
        <>
            <Image
                className="author"
                src="/author.jpg"
                alt="author"
                width="60"
                height="60"
            />
            <p>{pUser.name}</p>
            <p>{pUser.email}</p>
        </>
    );
};

export default PostUser;
