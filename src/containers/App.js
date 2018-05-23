import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContainer from './home.container'
import NavbarContainer from './navbar.container'
import Slider from './slider.container'
import BookContainer from './book.container'
import CategoryContainer from './category.container'
class App extends Component {
    render() {
        return (
            <Router>
                <section id="container" class="">
                    <NavbarContainer />
                    <Slider />
                    <Switch>
                        <Route exact path='/' component={HomeContainer} />
                        <Route exact path='/bookmanager' component={BookContainer} />
                        <Route exact path='/categorymanager' component={CategoryContainer} />
                    </Switch>
                </section>
            </Router>
        )
    }
}
export default App
