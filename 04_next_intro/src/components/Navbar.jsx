import { Noto_Serif } from 'next/font/google';
import Link from 'next/link';
const notoSerif = Noto_Serif({ subsets: ['latin'] });

const Navbar = () => {
    const links = [
        {
            title: 'Home',
            path: '/',
        },
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Contact',
            path: '/contact',
        },
        {
            title: 'Blog',
            path: '/blog',
        },
    ];

    return (
        <nav>
            <h1 className={notoSerif.className}>Page Title</h1>
            <div>
                {links.map((e) => (
                    <Link href={e.path} key={e.title}>
                        {e.title}
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
