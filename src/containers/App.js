import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContainer from './home.container'
import NavbarContainer from './navbar.container'
import Slider from './slider.container'
class App extends Component {
    render() {
        return (
            <section id="container" class="">
                <NavbarContainer />
                <Slider/>
                <Router>
                    <Switch>
                        <Route exact path='/' component={HomeContainer} />
                    </Switch>
                </Router>
            </section>
        )
    }
}
export default App
