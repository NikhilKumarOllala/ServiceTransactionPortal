import React from 'react'
import {Route,Redirect} from 'react-router-dom'


function ProtectedRoute({component:Component,...rest}) {
     token = document.cookie.jwt;
    return (
        <Route 
        {...rest}
        render = {(props) => {
            if(token){
                return <Component />
            }else{
                return <Redirect to ={{pathname:'/',state : props.location}} />
            }
        }}
        />
    )
}

export default ProtectedRoute
