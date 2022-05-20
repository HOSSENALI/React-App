import React from 'react';

const Child = (props) => {
    return (
        <h1>Hey,I am a child,my parent is {props.parent}</h1>
    );
}

export default Child;