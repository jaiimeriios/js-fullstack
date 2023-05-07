import { useEffect, useState } from 'react';
import { useJwt, decodeToken } from 'react-jwt';

const Dashboard = () => {
    const [quote, setQuote] = useState('');
    const [tempQuote, setTempQuote] = useState('');

    const populateQuote = async () => {
        const response = await fetch('http://localhost:666/quote', {
            headers: {
                'x-access-token': localStorage.getItem('token'),
            },
        });
        const data = await response.json();
        if (data.status === 'ok') {
            setQuote(data.quote);
        } else {
            console.log('no data');
        }
    };

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
    }, []);

    const updateQuote = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:666/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({
                quote: tempQuote,
            }),
        });
        const data = await response.json();
        console.log(data)
        
        if (data.status === 'ok') {
            setQuote(tempQuote);
            setTempQuote('')
        } else {
            console.log('no data');
        }
    };

    return (
        <>
            <h2>Quote</h2>
            <p>{quote || 'No quote Found'}</p>
            <form onSubmit={updateQuote}>
                <input
                    type="text"
                    value={tempQuote}
                    onChange={(e) => setTempQuote(e.target.value)}
                />
                <button>Set</button>
            </form>
        </>
    );
};

export default Dashboard;
