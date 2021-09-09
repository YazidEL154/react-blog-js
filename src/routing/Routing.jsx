import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { ArticleLayout } from '../layouts/ArticleLayout'
import { PageArticleFormulaire } from '../pages/PageArticleFormulaire';

export const Routing = () => {

    const history = useHistory();

    const versLesArticles = () => {
        history.push('/articles')
    }
    
    return (
        <Switch>
            <Route path="/articles/new">
                <PageArticleFormulaire/>
            </Route>
            <Route path="/articles">
                <ArticleLayout/>
            </Route>
        </Switch>
    )
}