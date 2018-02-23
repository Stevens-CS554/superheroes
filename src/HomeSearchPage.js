import React, { Component } from "react";
import SearchForm from "./SearchForm";
import SuperHeroListContainer from "./SuperHeroListContainer";

class HomeSearchPage extends Component {
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
      <div className="row">
        <div className="col-6">
          <SearchForm onSearch={this.onSearch} />
        </div>
        <div className="col-6">
          <SuperHeroListContainer
            orderById={this.state.orderById}
            superHero={this.state.superHero}
          />
        </div>
      </div>
    );
  }
}

export default HomeSearchPage;
