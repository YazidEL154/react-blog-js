import React, { createContext, useEffect, useState } from 'react'
import { ArticleList } from '../components/articles/ArticleList';
import { articleService } from '../services/ArticleService';

export const CRUDArticleContext = createContext();

export const ArticleLayout = (props) => {
    const [articles, setarticles] = useState([]);

    useEffect(() => {
        // Au chargement du composant
        if (props.articleId){
            articleService.findById(props.articleId).then(res=>setarticles([res]));
        }else {
            articleService.findAll().then(setarticles);
        }
    }, [])

    useEffect(() => {
        // code a chaque mise a jour du composant
    })

    useEffect(() => {
        // code a chaque mise a jour des articles
    }, [articles])

    const nouveauCommentaire = (com, targetArticle) => {
        setarticles(articles.map(article => {
            if (article === targetArticle) {
                article.commentaires.push(com)
                articleService.update(article);
            }
            return article
        }))
    }

    const supprimerCommentaire = (commentaire, articleCible) => {
        setarticles(articles.map(article => {
            if (article === articleCible) {
                article.commentaires = article.commentaires.filter(com => com !== commentaire);
                articleService.update(article);
            }
            return article
        }));
    }

    const supprimerArticle = (articleCible) => {
        articleService.delete(articleCible).then(()=>
            setarticles(articles.filter(article => article.id !== articleCible.id))
        )
    }

    const CRUDValues = {
        nouveauCommentaire,
        supprimerCommentaire,
        supprimerArticle,
        message: "Toto mange des"
    }

    return <>
        <CRUDArticleContext.Provider value={CRUDValues}>
            <ArticleList articles={articles} />
        </CRUDArticleContext.Provider>
    </>
}