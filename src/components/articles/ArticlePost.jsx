import React, { useContext } from 'react'
import { CRUDArticleContext } from '../../layouts/ArticleLayout'
import { ComentaryList } from '../comentaries/UserComentary'
import { UserProfileCard } from '../users/profile/UserProfileCard'
import { articleContext } from './ArticleList'
import './articles.css'


export const ArticlePost = (props) => {

    const {supprimerArticle} = useContext(CRUDArticleContext)
    const article = useContext(articleContext);
    

    return <div className="article-post">
        <ArticlePostHeader titre={article.titre} date={article.date}/>
        <ArticlePostBody body={article.body}/>
        <ArticlePostFooter auteur={article.auteur}/>
        <ComentaryList commentaires={article.commentaires}/>
        <button onClick={()=>supprimerArticle(article)}>Supprimer l'article</button>
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
