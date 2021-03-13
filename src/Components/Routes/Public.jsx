import React from 'react'
import { Redirect, Route } from 'react-router'

const Public = ({compoment: Component, ...rest}) => {
    const userLogged=false
    if(userLogged){
        return <Redirect to ="/" />
    }
    return (
        <Route {...rest} render={Component} />
    )
}

export default Public
