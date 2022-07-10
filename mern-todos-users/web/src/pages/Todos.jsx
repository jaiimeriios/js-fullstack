// import { useEffect } from 'react';
// import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

// import WorkoutsDetails from '../components/WorkoutsDetails';
// import WorkoutForm from '../components/WorkoutForm';

const Todos = () => {
    // const { workouts, dispatch } = useWorkoutsContext();

    // useEffect(() => {
    //     const fetchWorkouts = async () => {
    //         const response = await fetch('/workouts');
    //         const json = await response.json();

    //         if (response.ok) {
    //             dispatch({ type: 'SET_WORKOUTS', payload: json });
    //             // console.log('set workouts')
    //         }
    //     };
        
    //     fetchWorkouts();
    // }, [dispatch]);

    return (
        <>
            <h2>Todos</h2>
        </>
    );
};

export default Todos;