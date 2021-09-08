import React, { createContext, useState } from 'react'
import { ArticleFormulaire } from '../components/articles/ArticleFormulaire';
import { ArticleList } from '../components/articles/ArticleList';
import { articlesSample } from '../data/articles';

export const modifArticleContext = createContext();

export const ArticleLayout = (props) => {
  const [articles, setarticles] = useState(articlesSample);

  const onFinish = (article) => {
    setarticles([...articles, article])
  }

  const nouveauCommentaire = (com, targetArticle) => {
    setarticles(articles.map(article =>{
        if (article === targetArticle){
            article.commentaires.push(com)
        }
        return article
    }))
  }

  const supprimerCommentaire = (commentaire, articleCible) => {
    setarticles(articles.map(article =>{
        if (article === articleCible){
            article.commentaires = article.commentaires.filter(com=>com!==commentaire);
        }
        return article
    }));
  }

  return <>
    <modifArticleContext.Provider value={{nouveauCommentaire ,supprimerCommentaire}}>
        <ArticleList articles={articles}/>
        <ArticleFormulaire onFinish={onFinish}/>
    </modifArticleContext.Provider>
  </>
}