import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SuperHeroList from "./SuperHeroList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      superHero: ""
    };
  }

  onSearch = searchQuery => {
    this.setState({
      superHero: searchQuery
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <SearchForm onSearch={this.onSearch} />
            </div>
            <div className="col-6">
              <SuperHeroList superHero={this.state.superHero} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
