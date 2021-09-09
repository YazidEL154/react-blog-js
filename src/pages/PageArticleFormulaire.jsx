import React from 'react'
import { useHistory } from 'react-router-dom'
import { ArticleFormulaire } from '../components/articles/ArticleFormulaire'
import { articleService } from '../services/ArticleService'

export const PageArticleFormulaire = () => {

    const history = useHistory();

    const onFinish = (article) => {
        articleService.save(article).then(()=> history.push('/articles'))
    }

    return <div>
        <ArticleFormulaire onFinish={onFinish}/>
    </div>
}