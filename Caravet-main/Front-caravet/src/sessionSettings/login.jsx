import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


export default function LoginButton(){

    const { loginWithRedirect } = useAuth0();

    return <>  
    
    <div className="contenedor-Btn-login">
    <button className="btn-loginI" onClick={ () => loginWithRedirect() }>CAREVET</button>

</div>

</> 
} 