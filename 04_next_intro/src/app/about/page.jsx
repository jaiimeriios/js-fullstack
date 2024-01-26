'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const AboutPage = () => {

    // client side navigation
    const router = useRouter()
    const pathName = usePathname()
    const searParams = useSearchParams()

    const q = searParams.get('q')

    console.log(pathName)
    console.log(q)

    const handleClick = () => {
        console.log('writing...')
        router.push('/')
    }
    const handleClickNoHistory = () => {
        console.log('no browser history...')
        router.replace('/')
    }
    const handleClickRefresh = () => {
        console.log('Refresh...')
        router.refresh()
    }
    const handleClickBack = () => {
        console.log('back...')
        router.back()
    }
    const handleClickForward = () => {
        console.log('forward...')
        router.forward()
    }

    return (
        <div>
            <h2>About Page</h2>
            <div className="container-image">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatem cum, atque, veritatis, alias vitae iure obcaecati
                    voluptatum quia optio itaque aliquid rerum nisi perferendis
                    nesciunt magni illo dolor maxime adipisci.
                </p>
                <Image
                    src="/beach.jpg"
                    alt="about page"
                    width="640"
                    height="427"
                    
                />

                <Link href='/' prefetch={false}>Home Page</Link>
                <button onClick={handleClick}>Wrire and Redirect</button>

                <button onClick={handleClickNoHistory}>Wrire and Redirect NO History</button>

                <button onClick={handleClickRefresh}>Refresh</button>

                <button onClick={handleClickBack}>Back</button>
                <button onClick={handleClickForward}>Forwad</button>
            </div>
        </div>
    );
};

export default AboutPage;
