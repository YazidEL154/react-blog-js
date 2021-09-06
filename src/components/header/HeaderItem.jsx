import React from 'react'

export const HeaderItem = (props) => {
    console.log(props)
    const style = {
        backgroundColor: props.bgColor
    }
    return <div className="header-item" style={style}>
        {props.titre}
    </div>
}