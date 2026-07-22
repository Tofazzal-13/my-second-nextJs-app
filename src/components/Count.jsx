"use client"
import React, { useState } from 'react';

const Count = () => {
    const [count, setCount] = useState(0);
    console.log("counter is added", count);
    
    return (
        <div>
            <h2 className="text-3xl">Counter: {count} </h2>
            <button
            onClick={() => setCount(count + 1)}
            className='border p-2 rounded-2xl'>Increment</button>
        </div>
    );
};

export default Count;