import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import style from "./css/reset.css";

import InsertPost from "./screens/insert-post";
import SinglePost from "./screens/single-post";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route name="/post" component={SinglePost} />
        <Route name="/inserir-post" component={InsertPost} />
      </Switch>
    );
  }
}

export default App;
