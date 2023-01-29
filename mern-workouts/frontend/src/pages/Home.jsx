import { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

import WorkoutsDetails from '../components/WorkoutsDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
    const { userAuth } = useAuthContext();
    const { workouts, dispatch } = useWorkoutsContext();

    useEffect(() => {
        const fetchWorkouts = async () => {
            const response = await fetch('/workouts', {
                headers: {
                    Authorization: `Bearer ${userAuth.token}`,
                },
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({ type: 'SET_WORKOUTS', payload: json });
                // console.log('set workouts')
            }
        };
        if (userAuth) {
            fetchWorkouts();
        }
    }, [dispatch, userAuth]);

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
