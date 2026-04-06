import React, { useState } from 'react';

function Exp3() {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);
    const minValue = 0;
    const initialValue = 0;

    const increase = () => {
        setCounter(prev => prev + step);
    };

    const decrease = () => {
        setCounter(prev => Math.max(prev - step, minValue));
    };

    const reset = () => {
        setCounter(initialValue);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {counter}</h1>
            <div>
                <label>
                    Step: 
                    <input 
                        type="number" 
                        value={step} 
                        onChange={(e) => setStep(Number(e.target.value))} 
                        min="1" 
                    />
                </label>
            </div>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Exp3;