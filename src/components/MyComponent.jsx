import React, { Component, useState } from 'react'
import './MyComponent.css';

export class MonComposantClass extends Component {

    constructor(props){
        super(props);
        this.onClickMe = this.onClickMe.bind(this);
    }

    onClickMe(){
        alert(this.props.message);
    }

    render(){
        return <div>
            <p>Hello Class component: {this.props.message}</p>
            <button onClick={this.onClickMe}>Click Me!!</button>
        </div>
    }
}

export const MonComposantFonction = (props) => {
    const [message, setMessage] = useState(props.message);

    const onClickMe = ()=>alert(message) 

    const handleOnChange = (value) => {
        console.log(value.target.value);
        setMessage(value.target.value);
    }

    return <div>
        <p>Hello Function Compnent: {props.message}</p>
        <button onClick={onClickMe}>Click Me!!</button>
        <input type="text" value={message} onChange={handleOnChange}/>
    </div>
}