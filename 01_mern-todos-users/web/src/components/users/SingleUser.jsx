import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUsersContext } from '../../hooks/useDataContext';
import { Link } from 'react-router-dom';
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import { toast } from 'react-toastify';

const SingleUser = () => {
    const { id } = useParams();
    const { users, dispatch } = useUsersContext();

    const [user, setUser] = useState('');
    const [edit, setEdit] = useState(false);
    const [error, setError] = useState(false);

    const [userid, setUserId] = useState();
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/users');
            const data = await response.json();

            const currentUser = await data.filter((u) => u._id === id);
            setUser(currentUser[0]);

            if (response.ok) {
                dispatch({ type: 'SET_USERS', payload: data });
            }
        };
        fetchUsers();
    }, [id, dispatch]);

    const toggleEditMode = () => {
        setEdit(true);
        setUserId(user.userid);
        setName(user.name);
        setUsername(user.username);
        setEmail(user.email);
    };

    const handleCancelUpdate = (e) => {
        e.preventDefault()
        setEdit(false);
    }

    // PATCH
    const handlePatch = async (e) => {
        e.preventDefault();
        setError(false);

        let _id = user._id;
        const Userid = parseInt(userid);
        let patchUser = { userid: Userid, name, username, email, _id };

        if (userid === '' || name === '' || username === '' || email === '') {
            setError(true);
            return;
        }
        const response = await fetch(`${user._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(patchUser),
        });

        if (response.ok) {
            dispatch({ type: 'PATCH_USER', payload: patchUser });
            toast.info(`User ${user.name} updated`);
        }
        setEdit(false);
    };

    return (
        <div className="user-details">
            {edit ? (
                <form onSubmit={handlePatch}>
                    <label>User ID:</label>
                    <input
                        type="number"
                        onChange={(e) => setUserId(e.target.value)}
                        value={userid}
                    />
                    <label>Name:</label>
                    <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <label>Username:</label>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <input
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    
                    <button onClick={handleCancelUpdate}>Cancel</button>
                    <button type='submit'>Update</button>

                    {error && (
                        <div className="error-message">All fields required</div>
                    )}
                </form>
            ) : users ? (
                <>
                    <Link to="/users">Go Back</Link>

                    <p>{id}</p>
                    <p>{user.userid}</p>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>
                        {formatDistanceToNow(new Date(user.updatedAt), {
                            addSuffix: true,
                        })}
                    </p>
                    <button className="edit" onClick={toggleEditMode}>
                        Edit
                    </button>
                </>
            ) : (
                <p>Loading User...</p>
            )}
        </div>
    );
};

export default SingleUser;
