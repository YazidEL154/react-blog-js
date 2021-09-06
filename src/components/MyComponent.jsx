import React from 'react'
import './MyComponent.css';

export const MyComponent = () => {
    const monMessage = "J'ai un super message";

    return <>{monMessage.toUpperCase()}</>
    
}

export const MyOtherComponent = () => {
    const style = {color:"greenyellow"};
    return <h1 style={style} className="ma-class">
        Hello le titre
    </h1>
}

