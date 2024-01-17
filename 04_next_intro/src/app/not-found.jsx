import Link from 'next/link';

const NotFound = () => {
    return (
        <div>
            <h3>Page not found</h3>
            <p>
                Go back to <Link href="/">Home</Link> page
            </p>
        </div>
    );
};

export default NotFound;
