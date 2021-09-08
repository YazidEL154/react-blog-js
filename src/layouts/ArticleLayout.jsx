import React, { useState } from 'react'
import { ArticleFormulaire } from '../components/articles/ArticleFormulaire';
import { ArticleList } from '../components/articles/ArticleList';
import { articlesSample } from '../data/articles';

export const ArticleLayout = (props) => {
  const [articles, setarticles] = useState(articlesSample);
  
  const onFinish = (article) => {
    setarticles([...articles, article])
  }

  return <>
    <ArticleList articles={articles}/>
    <ArticleFormulaire onFinish={onFinish}/>
  </>
}