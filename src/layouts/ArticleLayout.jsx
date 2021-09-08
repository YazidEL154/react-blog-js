import React, { createContext, useState } from 'react'
import { ArticleFormulaire } from '../components/articles/ArticleFormulaire';
import { ArticleList } from '../components/articles/ArticleList';
import { articlesSample } from '../data/articles';

export const CRUDArticleContext = createContext();

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

  const supprimerArticle = (articleCible) => {
      setarticles(articles.filter(article=>article!==articleCible))
  }

  const CRUDValues = {
      nouveauCommentaire ,
      supprimerCommentaire,
      supprimerArticle,
      message:"Toto mange des"
    }

  return <>
    <CRUDArticleContext.Provider value={CRUDValues}>
        <ArticleList articles={articles}/>
        <ArticleFormulaire onFinish={onFinish}/>
    </CRUDArticleContext.Provider>
  </>
}