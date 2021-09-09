import React from 'react'
import { Link } from 'react-router-dom'

export const HeaderItem = (props) => {
    console.log(props)
    const style = {
        backgroundColor: props.bgColor
    }
    return <Link to={props.link}>
        <div className="header-item" style={style}>
            {props.titre}
        </div>
    </Link>
}