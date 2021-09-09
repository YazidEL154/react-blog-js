import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { ArticleLayout } from '../layouts/ArticleLayout'
import { PageArticles } from '../pages/PageArticle';
import { PageArticleFormulaire } from '../pages/PageArticleFormulaire';

export const Routing = () => {
    
    return (
        <Switch>
            <Route path="/articles/new">
                <PageArticleFormulaire/>
            </Route>
            <Route path="/articles/:id">
                <PageArticles/>
            </Route>
            <Route path="/articles">
                <ArticleLayout/>
            </Route>
        </Switch>
    )
}