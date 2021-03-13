import React from 'react'
import { Redirect, Route } from 'react-router'

const Protected = ({compoment: Component, ...rest}) => {
    const userLogged=false
    if(!userLogged){
        return <Redirect to ="/login" />
    }
    return (
        <Route {...rest} render={Component} />
    )
}

export default Protected
