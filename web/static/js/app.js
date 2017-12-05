// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"

import "phoenix_html"
import React from "react"
import ReactDOM from "react-dom"
import Blogs from "./containers/Blogs"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Form from './containers/Form'
import UpdateForm from './containers/UpdateForm'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Blogs}/>
          <Route path="/create" component={Form}/>
          <Route path="/update" component={UpdateForm}/>
        </div>
      </Router>
    )
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById("app")
)