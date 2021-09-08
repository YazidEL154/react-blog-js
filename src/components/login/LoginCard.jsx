import React, { useState } from 'react'

export const LoginCard = (props) => {

    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")

    const onsubmit = () => {
        if (!username || username.length < 8 || username.length>32){
            alert("Le nom de l'utilisteur n'est pas valide");
        } else {
            alert(`username: ${username}\npassword: ${password}`)
        }
    }
    return <form onSubmit={onsubmit} style={{display:"flex", justifyContent:"center", flexDirection:"column", width:"30vw", backgroundColor:"red", margin:"0 35vw"}}>
        <span>
            Username: 
            <input
                value={username} 
                onChange={(event)=>setusername(event.target.value)}/>
        </span>
        <span>
            Password: 
            <input type="password" 
                value={password} 
                onChange={(event)=>setpassword(event.target.value)}/>
        </span>
        <button type="submit">Submit</button>
    </form>
}