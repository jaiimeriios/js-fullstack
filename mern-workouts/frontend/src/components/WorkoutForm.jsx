import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutForm = () => {

    const { dispatch } = useWorkoutsContext()

    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null);
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const workout = { title, reps, load };

        const response = await fetch('/workouts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(workout),
        });

        const json = await response.json();
      
        if (!response.ok) {
            setError(json.error);
            setEmptyFields(json.emptyFields)
            console.log(emptyFields)
        }
        if (response.ok) {
            setTitle('');
            setReps('');
            setLoad('');
            setError(null);
            setEmptyFields([])
            dispatch({ type: 'CREATE_WORKOUT', payload: json })
            console.log('new added', json);
        }
    };

    return (
        <div className="forma">
            <form className="create" onSubmit={handleSubmit}>
                <h2>Add New</h2>

                <label>Title:</label>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className={emptyFields.includes('title') ? 'error' : ''}
                />

                <label>Reps:</label>
                <input
                    type="number"
                    onChange={(e) => setReps(e.target.value)}
                    value={reps}
                    className={emptyFields.includes('reps') ? 'error' : ''}
                />

                <label>Load (lb):</label>
                <input
                    type="number"
                    onChange={(e) => setLoad(e.target.value)}
                    value={load}
                    className={emptyFields.includes('load') ? 'error' : ''}
                />

                <button>Add</button>

                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
};

export default WorkoutForm;