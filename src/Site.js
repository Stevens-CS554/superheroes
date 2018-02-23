import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import SuperHeroListContainer from "./SuperHeroListContainer";
import SuperHeroEntryContainer from "./SuperHeroEntryContainer";
import HomeSearchPage from "./HomeSearchPage";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superHero: "",
      orderById: false
    };
  }

  onSearch = (searchQuery, orderById) => {
    this.setState({
      superHero: searchQuery,
      orderById: orderById
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Super Search</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 text-dark" to="/">
                Home
              </Link>
              <Link className="p-2 text-dark" to="/Foo">
                Bad Route
              </Link>
            </nav>
          </div>
        </header>

        <div className="container">
          <Switch>
            <Route path="/" exact={true} component={HomeSearchPage} />
            <Route
              path="/search/:superHeroName"
              component={SuperHeroListContainer}
            />
            <Route
              path="/superhero/:id"
              component={SuperHeroEntryContainer}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
