import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContainer from './home.container'
import NavbarContainer from './navbar.container'
const App = () => (
    <section id="container" class="">
        <NavbarContainer/>
        <Router>
            <Switch>
                <Route exact path='/' component={HomeContainer} />
            </Switch>
        </Router>
    </section>


)

export default App;
