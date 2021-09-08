import React, { useState } from 'react'
import { CustomTextArea } from '../ui/CustomInput'

export const CommentaireForm = (props) => {
    const [comBody, setcomBody] = useState("")

    const onFinish = () => {
        props.onFinish({
            auteur:{},
            body: comBody
        })
    }
    return <div>
        <CustomTextArea value={comBody} onChange={setcomBody}/>
        <button onClick={onFinish}>Submit</button>
    </div>
}