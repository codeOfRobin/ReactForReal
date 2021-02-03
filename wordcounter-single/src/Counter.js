import React from 'react';

function Counter({ count }) {
    return (
    <p className="mb2">
        <label htmlFor="count">Word count: </label>
        <output id="count">
            {count}
        </output>
    </p>);
}

export default Counter;