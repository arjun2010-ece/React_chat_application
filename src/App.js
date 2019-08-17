import React, { Component } from 'react'
import './App.css';
import  { Sidebar }  from './containers/Sidebar';
import  { MessagesList }  from './containers/MessagesList';
import { AddMessage }  from './containers/AddMessage';
import setupSocket  from './sockets/index';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    )
  }
}
export default App;