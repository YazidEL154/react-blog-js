import React from 'react'
import { ComentaryList } from '../comentaries/UserComentary'
import { UserProfileCard } from '../users/profile/UserProfileCard'
import './articles.css'

export const ArticleList = (props) => {
    return <div className="article-list">
        {props.articles ? 
            props.articles.map((article, index)=><ArticlePost index={index} article={article}/>)
            : <h2>Aucun Journaliste n'a voulu travailler aujourd'hui...</h2>
        }
    </div>
}

export const ArticlePost = (props) => {
    return <div className="article-post">
        <ArticlePostHeader titre={props.article.titre} date={props.article.date}/>
        <ArticlePostBody body={props.article.body}/>
        <ArticlePostFooter auteur={props.article.auteur}/>
        <ComentaryList commentaires={props.article.commentaires}/>
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
