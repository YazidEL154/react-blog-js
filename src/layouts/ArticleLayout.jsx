import React, { createContext, useEffect, useState } from 'react'
import { ArticleFormulaire } from '../components/articles/ArticleFormulaire';
import { ArticleList } from '../components/articles/ArticleList';
import { articlesSample } from '../data/articles';
import { articleService } from '../services/ArticleService';
import { httpService } from '../services/httpService';

export const CRUDArticleContext = createContext();

export const ArticleLayout = (props) => {
    const [articles, setarticles] = useState([]);

    useEffect(() => {
        articleService.findAll().then(setarticles);
    }, [])

    useEffect(() => {
        // code a chaque mise a jour du composant
    })

    useEffect(() => {
        // code a chaque mise a jour des articles
    }, [articles])

    const onFinish = (article) => {
        articleService.save(article).then(art=>{
            console.log(art)
            setarticles([...articles, art]);
        })
    }

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
            <ArticleFormulaire onFinish={onFinish} />
        </CRUDArticleContext.Provider>
    </>
}