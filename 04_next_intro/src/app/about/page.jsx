import Image from 'next/image';

const AboutPage = () => {
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
            </div>
        </div>
    );
};

export default AboutPage;
