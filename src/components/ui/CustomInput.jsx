import React from 'react'
import "./ui.css";

export const CustomInput = (props) => {
    const style = {
        width:`${props.width||'100%'}`, 
        fontSize:'0.8em'
    }
    return <div className="form-ui-container">
        <div>{props.label}</div>
        <div className="ui-form-item">
            <input value={props.value} 
                onChange={event=>props.onChange(event.target.value)}
                placeholder={props.placeholder}
                style={style}/>
        </div>
    </div>
}

export const CustomTextArea = (props) => {
    const style = {
        width:`${props.width||'100%'}`, 
        height:`${props.height||'6em'}`, 
        fontSize:'0.8em'
    }
    return <div className="form-ui-container">
        <div>{props.label}</div>
        <div className="ui-form-item">
            <textarea 
                value={props.value} 
                onChange={event=>props.onChange(event.target.value)}
                placeholder={props.placeholder}
                style={style}
                resi />
        </div>
    </div>
}