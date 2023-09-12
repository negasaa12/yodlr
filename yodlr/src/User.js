import React from "react";


const User = ({firstName, lastName, email, status})=>{

    

    return(
        <>
            <h3> {firstName} {lastName}</h3>
            <p> {email} </p>
            <p>{status}</p>
        </>
    )
}

export default User;