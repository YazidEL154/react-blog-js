import React from 'react'

export const UserList = (props) => {
    return <div>
        {props.titre ? <h2>{props.titre}</h2>: <h3>Pas de titre</h3>}
        <ol>
            {/* <=> ngFor="let user of data" */}
            {props.users.map((user, index)=><UserListItem key={index} user={user}/>)}
        </ol>
    </div>
}

export const UserListItem = (props) => {
    return <li>
        {props.user}
    </li>
}