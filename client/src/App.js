import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import jwt_decode from 'jwt-decode'

import Home from './components/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Profile from './components/profile/Profile'
import NotFound from './components/NotFound'


import Main from './components/layout/Main'
import store from './store'
import setAuthHeader from './utils/setAuthHeader'
import { logoutUser , getCurrentUser } from './actions/authAction'

if (localStorage.getItem('jwtToken')){
  const currentTime = Date.now() / 1000
  const decode = jwt_decode(localStorage.getItem('jwtToken'))
  if(currentTime > decode.exp){
    store.dispatch(logoutUser())
    window.location.href = '/'
  }
  else{
    setAuthHeader(localStorage.getItem('jwtToken'))
    store.dispatch(getCurrentUser()) 
  }
}

class App extends Component{
    render(){
      return(
        <Provider store={store}>
          <div>
            <BrowserRouter>
              <Main>
                <Switch>
                  <Route exact path="/" component={ Home }/>
                  <Route path="/login" component={ Login }/>
                  <Route path="/register" component={ Register }/>
                  <Route path="/profile/:userId" component={Profile} />
                  <Route component={NotFound} />
                </Switch>
              </Main>
            </BrowserRouter>
          </div>
        </Provider>
      )
    }
}

export default App