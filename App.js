import React, { Component } from 'react';
import logo from './logo.svg';
import Post from './component/Post'
import PostForm from './component/PostForm'
import './App.css';
import { HashRouter, NavLink, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
         <HashRouter>
            <div>
                <div className="header">
                    <ul>
                        <li><NavLink exact to='/'>List Customer</NavLink></li>
                        <li><NavLink to='/Add'>Add Customer</NavLink></li>
                    </ul>
                </div>
                <div className="content">
               
                    <Route exact path="/" component={Post}></Route>
                    <Route path="/Add" component={PostForm}></Route>
                </div>
            </div>
            </HashRouter>
      </div>
    );
  }
}

export default App;
