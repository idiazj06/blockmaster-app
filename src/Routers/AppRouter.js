import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import AppBM from '../Containers/AppBM'
import Login from '../Containers/Login'
import Registro from '../Containers/Registro'
import Perfil from '../Containers/Perfil'

export default function AppRouter() {
    return (
        <div>
            <Router>               
                    <Switch>                                               
                        <Route exact  path="/perfil" component={Perfil}  />
                        <Route exact  path="/peliculas" component={AppBM}  />
                        <Route exact  path="/registro" component={Registro}  />
                        <Route exact  path="/" component={Login}  />
                        <Redirect to="/" />    
                    </Switch> 
                                 
               </Router>
        </div>
    )
}
