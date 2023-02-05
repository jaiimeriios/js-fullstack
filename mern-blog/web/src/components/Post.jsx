import { Link } from 'react-router-dom';

const Post = () => {
    return (
        <div className="entry">
            <div className="bg-img">
                <img
                    src="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="bg blog"
                />
            </div>
            <h2>Lorem Ipsum Dolor Sit Amet</h2>
            <p className="info">
                <Link className="author" to='/'>Name Here</Link>
                <time>2023-02-01</time>
            </p>
            <p>
                Etiam lacinia vitae lorem et rhoncus. Nulla maximus odio libero,
                at blandit leo mollis ac. Cras at dui felis. Pellentesque et
                ante quis eros condimentum ultricies et a orci. In pulvinar,
                lacus non porta euismod, orci diam aliquet dolor, vel pretium
                augue nisi eget quam. Vestibulum ante ipsum primis in faucibus
                orci luctus et ultrices posuere cubilia curae; Nunc cursus
                consequat mattis. Vestibulum elementum lacus sed aliquam
                fermentum.
            </p>
        </div>
    );
};

export default Post;
