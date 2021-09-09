import React from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import { ArticleLayout } from './layouts/ArticleLayout'

export const Routing = () => {

    const history = useHistory();

    const versLesArticles = () => {
        history.push('/articles')
    }
    
    return (
        <Switch>
            <Route path="/articles">
                <ArticleLayout/>
            </Route>
            <Route path="/">
                <button onClick={versLesArticles}>Vers les articles</button>
            </Route>
        </Switch>
    )
}