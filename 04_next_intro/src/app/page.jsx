import Image from 'next/image';

const Home = () => {
    return (
        <div>
            <h2>Home Page</h2>
            <div className="container-image">
                <h3>Lorem Ipsum Dolor</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatem cum, atque, veritatis, alias vitae iure obcaecati
                    voluptatum quia optio itaque aliquid rerum nisi perferendis
                    nesciunt magni illo dolor maxime adipisci.
                </p>
                <button></button>
                <Image
                    src="/pc.gif"
                    alt="home page"
                    width="500"
                    height="320"
                />
            </div>
        </div>
    );
};

export default Home;
