'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Noto_Serif } from 'next/font/google';
const notoSerif = Noto_Serif({ subsets: ['latin'] });

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
        <>
            <header>
                <h1 className={notoSerif.className}>Next Test</h1>
                <NavLinks links={links} styleClassName="nav" />
                <button onClick={() => setMenuOpen((prev) => !prev)}>
                    {menuOpen ? 'Close' : 'Menu'}
                </button>
            </header>
            {menuOpen && <NavLinks links={links} styleClassName="mobileNav" />}
        </>
    );
};

export default Navbar;

const NavLinks = ({ links, styleClassName }) => {
    // Temp conditionals
    const session = true;
    const admin = true;

    const pathName = usePathname();

    return (
        <nav className={styleClassName}>
            {links.map((e) => (
                <Link
                    href={e.path}
                    key={e.title}
                    className={`${pathName === e.path && 'active'}`}
                >
                    {e.title}
                </Link>
            ))}
            {session ? (
                <>
                    {admin && (
                        <Link
                            href="/admin"
                            className={`${pathName === '/admin' && 'active'}`}
                        >
                            Admin
                        </Link>
                    )}
                    <button>Logout</button>
                </>
            ) : (
                <Link href="/login">Login</Link>
            )}
        </nav>
    );
};
