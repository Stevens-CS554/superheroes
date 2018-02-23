import React, { Component } from "react";
import SearchForm from "./SearchForm";

class HomeSearchPage extends Component {
  onSearch = (searchQuery, orderById) => {
    this.props.history.push(`/search/${searchQuery}?orderById=${orderById}`);
  };

  render() {
    return (
      <div className="row">
        <div className="col-6">
          <SearchForm onSearch={this.onSearch} />
        </div>
      </div>
    );
  }
}

export default HomeSearchPage;
