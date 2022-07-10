import { useState } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutsDetails = ({ workout }) => {
    const { dispatch } = useWorkoutsContext();
    const [edit, setEdit] = useState(false);
    const [error, setError] = useState(false);
    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');

    const toggleEditMode = () => {
        setEdit(true);
        setTitle(workout.title);
        setReps(workout.reps);
        setLoad(workout.load);
    };

    // PATCH
    const handlePatch = async (e) => {
        e.preventDefault();
        setError(false);
        let _id = workout._id;
        let patchWorkout = { title, reps, load, _id };

        if (title === '' || reps === '' || load === '') {
            setError(true);
            return;
        }
        const response = await fetch(`workouts/${workout._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(patchWorkout),
        });
        if (!response.ok) {
            console.log('error');
        }
        if (response.ok) {
            dispatch({ type: 'PATCH_WORKOUT', payload: patchWorkout });
        }
        setEdit(false);
    };

    // DELETE
    const handleDelete = async () => {
        const response = await fetch(`workouts/${workout._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = await response.json();
        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json });
        }
    };

    return (
        <div className={`workout-details ${edit && 'edit-details'}`}>
            {edit ? (
                <form onSubmit={handlePatch}>
                    <div className="edit-section">
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="edit-section">
                        <label>Reps</label>
                        <input
                            type="number"
                            value={reps}
                            onChange={(e) => setReps(e.target.value)}
                        />
                    </div>

                    <div className="edit-section">
                        <label>Load</label>
                        <input
                            type="number"
                            value={load}
                            onChange={(e) => setLoad(e.target.value)}
                        />
                    </div>
                    <button className="update" onClick={handlePatch}>
                        Update
                    </button>
                    {error && (
                        <div className="error-message">
                            All field required
                        </div>
                    )}
                </form>
            ) : (
                <>
                    <h4>{workout.title}</h4>
                    <p>
                        <b>Reps</b> {workout.reps}
                    </p>
                    <p>
                        <b>Load (lb)</b> {workout.load}
                    </p>
                    <p>
                        {formatDistanceToNow(new Date(workout.createdAt), {
                            addSuffix: true,
                        })}
                    </p>
                    <span className="edit" onClick={toggleEditMode}>
                        Edit
                    </span>
                    <span className="delete" onClick={handleDelete}>
                        Delete
                    </span>
                </>
            )}
        </div>
    );
};

export default WorkoutsDetails;