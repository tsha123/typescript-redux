import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import Game from "./game/Game";
import Header from "./Header";
import Home from "./home/Home";

interface IAppProps { }

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Redirect exact from="/" to="/home" />
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/game">
          <Game />
        </Route>
      </Container>
    </BrowserRouter>
  );
};

export default App;
