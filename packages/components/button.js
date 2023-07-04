import React from 'react';

function Button({ text = 'Click me' }) {
    return (
        <button>{text}</button>
    );
}

export default Button;