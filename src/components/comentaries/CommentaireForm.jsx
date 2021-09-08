import React, { useContext, useState } from 'react'
import { CRUDArticleContext } from '../../layouts/ArticleLayout'
import { articleContext } from '../articles/ArticleList'
import { CustomTextArea } from '../ui/CustomInput'

export const CommentaireForm = (props) => {
    const [comBody, setcomBody] = useState("")

    const {nouveauCommentaire} = useContext(CRUDArticleContext);
    const currentArticle = useContext(articleContext);

    const onFinish = () => {
        nouveauCommentaire({
            auteur:{},
            body: comBody
        }, currentArticle)
        setcomBody("")
    }
    return <div>
        <CustomTextArea value={comBody} onChange={setcomBody}/>
        <button onClick={onFinish}>Submit</button>
    </div>
}