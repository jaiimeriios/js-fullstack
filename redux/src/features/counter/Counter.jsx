import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

const Counter = () => {
    // useDispatch returns a reference to the dispatch function from the store file
    // useSelector brings all the states from the store.js file
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);

    const [incrementAmount, setIncrementAmount] = useState(0);
    return (
        <div className="counter">
            <p>
                Counter:
                <span>{count}</span>
            </p>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
            <button onClick={() => dispatch(increment())}>+</button>
            <br />
            <input
                type="number"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <button
                onClick={() =>
                    dispatch(incrementByAmount(Number(incrementAmount) || 0))
                }
            >
                Add Amount
            </button>
        </div>
    );
};

export default Counter;
