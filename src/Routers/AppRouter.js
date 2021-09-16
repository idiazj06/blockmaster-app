import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"

import AppBM from '../Containers/AppBM'
import Login from '../Containers/Login'

export default function AppRouter() {
    return (
        <div>
            <Router>               
                    <Switch>                                               
                        <Route   path="/peliculas" component={AppBM}  />
                        <Route exact  path="/" component={Login}  />
                    </Switch>                  
               </Router>
        </div>
    )
}
