import React, { useContext } from 'react'
import { CRUDArticleContext } from '../../layouts/ArticleLayout'
import { articleContext } from '../articles/ArticleList'

import { UserProfileCard } from "../users/profile/UserProfileCard"
import { CommentaireForm } from "./CommentaireForm"

export const ComentaryList = (props) => {
    return <div>
        {props.commentaires.map((com, index)=><ComentaryItem 
            key={index} 
            commentaire={com} />)}
        <CommentaireForm/>
    </div>
}

export const ComentaryItem = (props) => {
    const {supprimerCommentaire} = useContext(CRUDArticleContext);
    const currentArticle = useContext(articleContext)

    const onDelete = () => {
        supprimerCommentaire(props.commentaire, currentArticle);
    }
    return <div className="com-item">
        <UserProfileCard
            speudo={props.commentaire.auteur.speudo}
            metier={props.commentaire.auteur.metier}
            imgSrc={props.commentaire.auteur.imgSrc}/>
            <p>{props.commentaire.body}</p>
            <button onClick={onDelete}>Supprimer le commentaire</button>
    </div>
}