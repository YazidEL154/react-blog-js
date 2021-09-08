import React, { useState } from 'react'
import { CustomInput, CustomTextArea } from '../ui/CustomInput';
import './articles.css'
export const ArticleFormulaire = (props) => {
    const [titre, settitre] = useState("");
    const [body, setbody] = useState("");

    const onSubmit = () => {
        props.onFinish({
            titre,
            date: new Date(Date.now()).toISOString(),
            body,
            auteur:{
                speudo: "GeGe",
                metier: "Raleur professionel"
            },
            commentaires:[]
        });
        settitre("");
        setbody("")
    }
    return <div className="article-form" >
        <CustomInput placeholder="Titre" value={titre} onChange={settitre}/>
        <CustomTextArea placeholder="Body" value={body} onChange={setbody}/>
        <button onClick={onSubmit}>Submit</button>
    </div>
}

