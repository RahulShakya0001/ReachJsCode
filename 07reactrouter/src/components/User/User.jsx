import React from "react";
import { useParams } from "react-router-dom";
function User(){
    const {userid} = useParams()
    return (
        <div className="bg-black py-5 text-center text-lg text-white">User: {userid}</div>
    )
}


export default User