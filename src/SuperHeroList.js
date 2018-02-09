import React, { Component } from "react";
import Axios from "axios";

// query something like https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=iron&apikey=edcaab04376e3dd7e094ec9c12e7fcdd

class SuperHeroList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listOfMatchingHeroes: []
    };
  }

  async getSearchResults(query) {
    const httpResponse = await Axios.get(
      "https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=iron&apikey=edcaab04376e3dd7e094ec9c12e7fcdd"
    );

    return httpResponse.data.data.results;
  }

  componentDidMount = async props => {
    if (this.props.superHero) {
      const matches = await this.getSearchResults(this.props.superHero);
      this.setState({
        listOfMatchingHeroes: matches
      });
    }
  };

  componentWillReceiveProps = async newProps => {
    if (newProps.superHero) {
      const matches = await this.getSearchResults(newProps.superHero);
      this.setState({
        listOfMatchingHeroes: matches
      });
    }
  };

  render() {
    if (this.props.superHero) {
      return (
        <h1>
          {this.state.listOfMatchingHeroes.length} results for{" "}
          {this.props.superHero}
        </h1>
      );
    }
    return <h1>Search for someone</h1>;
  }
}

export default SuperHeroList;
