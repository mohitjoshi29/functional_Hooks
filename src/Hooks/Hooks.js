import React from 'react'
import { useState, useEffect } from 'react';

export default function Hooks() {
    const [state, setState] = useState(5);

    useEffect(() => {
        document.title = state;
    });
    function handleNameChange(e) {
        setState(e.target.value);
    }

    // const dec = () => {
    //     setState(state - 1)
    // }

    // const inc = () => {
    //     setState(state + 1);
    // }

    return (
        <div>
            <input value={state} onChange={handleNameChange}></input><br /><br /><br /><br />
            <text>{state}</text><br />
            {/* <pre>
                {state !== 0 ? <button onClick={dec}>decrement</button> : <button disabled>decrement</button>}
                <p>{state}</p>
                <button onClick={inc}>increment</button>
            </pre> */}
        </div>
    )
}
