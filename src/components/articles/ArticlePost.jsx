import React, { useContext } from 'react'
import { articleContext } from '../../layouts/ArticleLayout'
import { ComentaryList } from '../comentaries/UserComentary'
import { UserProfileCard } from '../users/profile/UserProfileCard'
import './articles.css'


export const ArticlePost = (props) => {
    const context = useContext(articleContext);

    return <div className="article-post">
        <ArticlePostHeader titre={props.article.titre} date={props.article.date}/>
        <ArticlePostBody body={props.article.body}/>
        <ArticlePostFooter auteur={props.article.auteur}/>
        <ComentaryList 
            commentaires={props.article.commentaires} 
            onFinish={(com)=>context.newCom(com, props.article)}/>
    </div>
}

export const ArticlePostHeader = (props) => {
    return <div className="article-post-header">
        <h2>{props.titre}</h2>
        <h5>{props.date}</h5>
    </div>
}

export const ArticlePostBody = (props) => {
    return <div className="article-post-body">
        <p>{props.body}</p>
    </div>
}

export const ArticlePostFooter = (props) => {
    return <div className="article-post-footer">
        <UserProfileCard 
            speudo={props.auteur.speudo}
            metier={props.auteur.metier}
            imgSrc={props.auteur.imgSrc}
            width="100%"/>
    </div>
}
