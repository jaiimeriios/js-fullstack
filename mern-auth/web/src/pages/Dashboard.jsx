import { useEffect, useState } from 'react';
import { useJwt, decodeToken } from 'react-jwt';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [quotes, setQuotes] = useState('');
    const [newQuote, setNewQuote] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        const decodedToken = decodeToken(token);
        // console.log(decodedToken);

        if (decodedToken) {
            if (!decodedToken) {
                localStorage.removeItem('token');
                window.location.replace('/');
            } else {
                populateQuote();
            }
        }
    }, [quotes]);

    const populateQuote = async () => {
        const response = await fetch('http://localhost:666/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        });
        const data = await response.json();
        if (data.status === 'ok') {
            setName(data.user.name);
            setEmail(data.user.email);
            setQuotes(data.user.quote);
        } else {
            console.log('no data');
        }
    };

    const updateQuote = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:666/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                quote: newQuote,
            }),
        });
        const data = await response.json();
        
        if (data.status === 'ok') {
            console.log(data);
            setNewQuote('');
            // setQuotes(newQuote);
        } else {
            console.log('no data');
        }
    };

    return (
        <>
            <h2>{name}</h2>
            <h3>{email}</h3>

            <form onSubmit={updateQuote}>
                <input
                    type="text"
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                />
                <button>Add New</button>
            </form>

            <h4>Quote</h4>
            {
                quotes && quotes.map((q, i) => (
                    <p key={i}>{q}</p>
                ))
            }

        </>
    );
};

export default Dashboard;
