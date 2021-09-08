import React, { createContext, useState } from 'react'
import { ArticleFormulaire } from '../components/articles/ArticleFormulaire';
import { ArticleList } from '../components/articles/ArticleList';
import { articlesSample } from '../data/articles';

export const articleContext = createContext();

export const ArticleLayout = (props) => {
  const [articles, setarticles] = useState(articlesSample);

  const onFinish = (article) => {
    setarticles([...articles, article])
  }

  const newCom = (com, targetArticle) => {
    setarticles(articles.map(article =>{
        if (article === targetArticle){
            article.commentaires.push(com)
        }
        return article
    }))
  }

  const deleteArticle = (article) =>{
      
  }

  return <>
    <articleContext.Provider value={{newCom,}}>
        <ArticleList articles={articles}/>
        <ArticleFormulaire onFinish={onFinish}/>
    </articleContext.Provider>
  </>
}