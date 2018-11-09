import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import style from "./css/reset.css";

import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./screens/home";
import InsertPost from "./screens/insert-post";
import SinglePost from "./screens/single-post";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:dyn/post/:id" component={SinglePost} />
          <Route path="/inserir-post" component={InsertPost} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
