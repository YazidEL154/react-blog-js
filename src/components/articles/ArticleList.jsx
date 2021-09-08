import React from 'react'
import { ArticlePost } from './ArticlePost'
import './articles.css'

export const ArticleList = (props) => {
    return <div className="article-list">
        {props.articles ? 
            props.articles.map((article, index)=><ArticlePost index={index} article={article}/>)
            : <h2>Aucun Journaliste n'a voulu travailler aujourd'hui...</h2>
        }
    </div>
}
