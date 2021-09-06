import { UserProfileCard } from "../users/profile/UserProfileCard"

export const ComentaryList = (props) => {
    return <div>
        {props.commentaires.map((com, index)=><ComentaryItem 
            key={index} 
            auteur={com.auteur}
            body={com.body} />)}
    </div>
}

export const ComentaryItem = (props) => {
    return <div className="com-item">
        <UserProfileCard
            speudo={props.auteur.speudo}
            metier={props.auteur.metier}
            imgSrc={props.auteur.imgSrc}/>
            {props.body}
    </div>
}