import { useContext } from 'react';
import { WorkoutsContext } from '../context/WorkoutsContext';

/*
    useContext:
    Accepts a context object (the value returned from React.createContext) and returns the current context value for that context. The current context value is determined by the value prop of the nearest <MyContext.Provider> above the calling component in the tree.
*/

// invoke this hook when need the context on a component
// useWorkoutsContext invokes the context where actions (crud) should happen
// the context must wrap the parent component for all the components than need context

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext);

    if (!context) {
        throw Error(
            'useWorkoutsContext must be used inside an WorkoutsContextProvider'
        );
    }

    return context;
};