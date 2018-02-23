import React, { Component } from "react";
import { getSuperhero } from "./utility/marvelApi";

import SuperHeroEntry from "./SuperHeroEntry";

class SuperHeroEntryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hero: null
    };
  }

  componentDidMount = async () => {
    const { match } = this.props;
    const id = match.params.id;

    if (id) {
      const hero = await getSuperhero(id);

      this.setState({
        hero
      });
    }
  };

  componentWillReceiveProps = async newProps => {
    const currentMatch = this.props.match;
    const currentId = currentMatch.params.id;

    const newMatch = newProps.match;
    const newId = newMatch.params.id;

    if (newId && newId !== currentId) {
      const hero = await getSuperhero(newId);

      this.setState({
        hero
      });
    }
  };

  render() {
    if (!this.state.hero) {
      return <h1>Loading...</h1>;
    }

    return <SuperHeroEntry hero={this.state.hero} />;
  }
}

export default SuperHeroEntryContainer;
