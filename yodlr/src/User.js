import React from "react";


const User = ({firstName, lastName, email, id})=>{

    

    return(
        <>
            <h3> {firstName} {lastName}</h3>
            <p> {email} </p>
        </>
    )
}

export default User;