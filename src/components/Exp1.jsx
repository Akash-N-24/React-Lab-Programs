import React, { useState } from 'react';

function Exp1() {
    const [text, setText] = useState('');

    return (
        <div>
            <h1>Experiment 1: Text Input</h1>
            <p>This is a simple experiment to demonstrate text input in React.</p>
            <label>
                Enter text:
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
            </label>
            <p>You typed: {text}</p>
        </div>
    );
}

export default Exp1;