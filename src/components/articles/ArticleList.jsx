import React, { createContext } from 'react'
import { ArticlePost } from './ArticlePost'
import './articles.css'

export const articleContext = createContext();

export const ArticleList = (props) => {

    return <div className="article-list">
        {props.articles ? 
            props.articles.map((article, index)=>
            <articleContext.Provider value={article} key={index}>
                <ArticlePost/>
            </articleContext.Provider>)
            : <h2>Aucun Journaliste n'a voulu travailler aujourd'hui...</h2>
        }
    </div>
}
