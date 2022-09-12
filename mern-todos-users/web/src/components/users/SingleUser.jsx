import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUsersContext } from '../../hooks/useDataContext';
import { Link } from 'react-router-dom';
// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const SingleUser = () => {
    const { id } = useParams();
    const { users, dispatch } = useUsersContext();

    const [user, setUser] = useState('');
    const [edit, setEdit] = useState(false);
    const [error, setError] = useState(false);

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [age, setAge] = useState();

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
    }, [dispatch]);

    const toggleEditMode = () => {
        setEdit(true);
        setName(user.name);
        setUsername(user.username);
        setAge(user.age);
    };

    // PATCH
    const handlePatch = async (e) => {
        e.preventDefault();
        setError(false);

        let _id = user._id;
        const Age = parseInt(age);
        let patchUser = { name, username, age: Age, _id };

        if (name === '' || username === '' || age === '') {
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
        }
        setEdit(false);
    };

    return (
        <div className="user-details">
            {edit ? (
                <form onSubmit={handlePatch}>
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
                    <label>Age:</label>
                    <input
                        type="number"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                    />
                    <button>Save</button>
                    {error && (
                        <div className="error-message">All fields required</div>
                    )}
                </form>
            ) : users ? (
                <>
                    <Link to="/users">Go Back</Link>

                    <p>{id}</p>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.age}</p>
                    <p>
                        {formatDistanceToNow(new Date(user.createdAt), {
                            addSuffix: true,
                        })}
                    </p>
                    <p>
                        {formatDistanceToNow(new Date(user.updatedAt), {
                            addSuffix: true,
                        })}
                    </p>
                    <span className="edit" onClick={toggleEditMode}>
                        Edit
                    </span>
                </>
            ) : (
                <p>Loading User...</p>
            )}
        </div>
    );
};

export default SingleUser;
