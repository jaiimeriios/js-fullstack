import { useEffect } from 'react';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

import WorkoutsDetails from '../components/WorkoutsDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/workouts');
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json });
                // console.log('set workouts')
            }
        };
        
        fetchWorkouts();
    }, [dispatch]);

    return (
        <>
            <h2>Home</h2>
            <div className="home">
                <div className="workouts">
                    {workouts &&
                        workouts.map((workout) => (
                            <WorkoutsDetails
                                key={workout._id}
                                workout={workout}
                            />
                        ))}
                </div>
                <WorkoutForm />
            </div>
        </>
    );
};

export default Home;