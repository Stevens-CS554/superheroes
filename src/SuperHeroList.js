import React, { Component } from "react";

class SuperHeroList extends Component {
  render() {
    if (this.props.superHero) {
      return <h1>Results for {this.props.superHero}</h1>;
    }
    return <h1>Search for someone</h1>;
  }
}

export default SuperHeroList;
