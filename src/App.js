import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ScrollToTop from './middleware/scrollToTop'
import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'

import createHistory from 'history/createBrowserHistory'
const history = createHistory()

import HomePageContainer from './containers/homepage'
import MenuContainer from './containers/account/menu'
import ItemContainer from './containers/item'

import Order from './components/account/order'
import Support from './components/account/support'
import Info from './components/account/info'
import Address from './components/account/address'

class App extends Component {

  render () {
    return (
      <Router history={history}>
        <div>
          <Header/>
          <Nav/>
          <ScrollToTop>
            <Route render={({location}) => (

              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                <div key={location.pathname} className='body'>

                  {/*<Switch>*/}
                    <Route location={location} exact path="/" component={HomePageContainer}/>
                    <Route location={location} path="/item/:id" component={ItemContainer}/>
                    <Route location={location} path="/account" component={MenuContainer}/>
                    <Route location={location} path="/account/order" component={Order}/>
                    <Route location={location} path="/account/support" component={Support}/>
                    <Route location={location} path="/account/info" component={Info}/>
                    <Route location={location} path="/account/address" component={Address}/>
                  {/*</Switch>*/}
                </div>
              </ReactCSSTransitionGroup>
            )
            }/>
          </ScrollToTop>
          <Footer/>
        </div>
      </Router>
    )
  }
}

export default App
