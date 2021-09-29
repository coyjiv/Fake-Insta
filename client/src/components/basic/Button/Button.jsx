import React from 'react';

const Button = (props) => (
    <button onClick={props.click}>{props.content}</button>
);

export default Button;