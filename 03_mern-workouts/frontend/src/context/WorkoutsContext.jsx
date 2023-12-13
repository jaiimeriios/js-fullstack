import { createContext, useReducer } from 'react';
/*
    'Context' provides a way to pass data through the component tree without having to pass props down manually at every level.

    createContext:
    When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

    useReducer: 
    An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method
*/

export const WorkoutsContext = createContext();

// state: previous state before changes to it
// action: object passed to dispatch function
export const workoutsReducer = (state, action) => {

    // console.log('state: ', state)
    // console.log('action: ', action)

    switch (action.type) {
        case 'SET_WORKOUTS':
            return {
                workouts: action.payload,
            };
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts],
            };
        case 'DELETE_WORKOUT':
            return {
                workouts: state.workouts.filter((w) => w._id !== action.payload._id)
            }
        case 'PATCH_WORKOUT':
            const patchObject = state.workouts.find(arrayItem => {
                return arrayItem._id === action.payload._id
            });
            Object.assign(patchObject, action.payload);
            return {
                workouts: state.workouts
            }
        default:
            return state;
    }
};

// exported and wraps the <App /> component on index.js
// 'children' prop is all the components inside the <App /> component
// wraps the component that need to acces the context it represents

export const WorkoutsContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts: null
    });

    return (

        // State value provided by 'value'
        // provided value wille be available to components

        <WorkoutsContext.Provider value={{ ...state, dispatch }}>
            { children }
        </WorkoutsContext.Provider>
    );
};
