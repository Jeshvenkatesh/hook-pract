import React,  { useState } from 'react';

const CounterApp=()=>{
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const IncrementFive=()=>{
        for(let i=0; i<5 ;i++){

            setCount(prevCount => prevCount + 1)
        }
    }
    return(
        <div> Count : {count} <br/>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={IncrementFive}>Increment 5</button>
        </div>
    )
}
export default CounterApp;