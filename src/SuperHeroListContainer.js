import React, { Component } from "react";
import { searchForSuperheroes } from "./utility/marvelApi";

import SuperHeroList from "./SuperHeroList";

class SuperHeroListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfMatchingHeroes: []
    };
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const superHero = match.params.superHeroName;

    if (superHero) {
      const matches = await searchForSuperheroes(superHero);

      this.setState({
        listOfMatchingHeroes: matches
      });
    }
  };

  componentWillReceiveProps = async newProps => {
    const currentMatch = this.props.match;
    const currentSuperhero = currentMatch.params.superHeroName;

    const newMatch = newProps.match;
    const newSuperhero = newMatch.params.superHeroName;

    if (newSuperhero && newSuperhero !== currentSuperhero) {
      const matches = await searchForSuperheroes(newSuperhero);

      this.setState({
        listOfMatchingHeroes: matches
      });
    }
  };

  render() {
    if (!this.props.match.params.superHeroName) {
      return <h1>Search for someone</h1>;
    }

    const heroes = [...this.state.listOfMatchingHeroes];

    if (this.props.orderById) {
      heroes.sort((x, y) => {
        if (x.id < y.id) return 1;
        if (x.id > y.id) return -1;

        return 0;
      });
    }

    return <SuperHeroList heroList={heroes} />;
  }
}

export default SuperHeroListContainer;
