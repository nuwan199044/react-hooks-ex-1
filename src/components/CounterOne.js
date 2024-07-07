import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter:10
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state

    }
}

function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h3>First Counter is : {count.firstCounter}</h3>
        <h3>Second Counter is : {count.secondCounter}</h3>
        <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
        <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment5</button>
        <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement5</button>
        <button onClick={() => dispatch({type: 'increment2', value: 2})}>Increment2</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 2})}>Decrement2</button>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterOne