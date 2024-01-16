import { Noto_Serif } from 'next/font/google';
const notoSerif = Noto_Serif({ subsets: ['latin'] });

const Navbar = () => {
    return (
        <div>
            <h1 className={notoSerif.className}>Page Title</h1>
            <ul>
                <li>asdf</li>
                <li>asdf</li>
            </ul>
        </div>
    )
};

export default Navbar;
