import React from 'react'

import { UserProfileCard } from "../users/profile/UserProfileCard"
import { CommentaireForm } from "./CommentaireForm"

export const ComentaryList = (props) => {
    return <div>
        {props.commentaires.map((com, index)=><ComentaryItem 
            key={index} 
            auteur={com.auteur}
            body={com.body} />)}
        <CommentaireForm onFinish={props.onFinish}/>
    </div>
}

export const ComentaryItem = (props) => {
    return <div className="com-item">
        <UserProfileCard
            speudo={props.auteur.speudo}
            metier={props.auteur.metier}
            imgSrc={props.auteur.imgSrc}/>
            <p>{props.body}</p>
    </div>
}