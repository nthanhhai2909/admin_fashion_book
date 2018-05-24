import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomeContainer from './home.container'
import NavbarContainer from './navbar.container'
import Slider from './slider.container'
import BookContainer from './book.container'
import CategoryContainer from './category.container'
import AuthorContainer from './author.container'
import PublisherContainer from './publisher.container'
import UserContainer from './user.container'
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
                        <Route exact path='/authormanager' component={AuthorContainer} />
                        <Route exact path='/publishermanager' component={PublisherContainer} />
                        <Route exact path='/usermanager' component={UserContainer} />
                        
                    </Switch>
                </section>
            </Router>
        )
    }
}
export default App
