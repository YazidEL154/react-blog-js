import React, { } from 'react'
import { useParams } from 'react-router-dom'
import { ArticleLayout } from '../layouts/ArticleLayout';

export const PageArticles = () => {
    const params = useParams();
    
    return <ArticleLayout articleId={params['id']}/>
}