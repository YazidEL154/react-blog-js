import React from 'react'
import './user-profile.css'

export const UserProfileCard = (props) => {
    return <div className="user-profile-card" style={{width:props.width||"20%"}}>
        <UserProfilePicture src={props.imgSrc}/>
        <div className="user-profile-card-body">
            {props.speudo}
            <span>({props.metier})</span>
        </div>
    </div>
}

const defaultSrc = "https://180dc.org/wp-content/uploads/2017/11/profile-placeholder.png"
export const UserProfilePicture = (props) => {
    return <>
        <img className="user-profile-picture" src={props.src||defaultSrc} alt="PP"/>
    </>
}