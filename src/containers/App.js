import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContainer from './home.container'
import NavbarContainer from './navbar.container'
import Slider from './slider.container'
class App extends Component {
    render() {
        return (
            <Router>
                <section id="container" class="">
                    <NavbarContainer />
                    <Slider />
                    <Switch>
                        <Route exact path='/' component={HomeContainer} />
                        <Route exact path='/bookmanager' component={HomeContainer} />
                    </Switch>
                </section>
            </Router>
        )
    }
}
export default App
