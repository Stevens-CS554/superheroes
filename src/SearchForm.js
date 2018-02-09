import React, { Component } from "react";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    };
  }

  onSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery) {
      this.props.onSearch(this.state.searchQuery);
    }
  };

  onSearchQueryChange = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="superheroName">
            What superhero do you want to search for?
          </label>
          <input
            type="text"
            value={this.state.searchQuery}
            onChange={this.onSearchQueryChange}
            className="form-control"
            id="superheroName"
            aria-describedby="superheroHelp"
            placeholder="Superhero..."
          />
          <small id="superheroHelp" className="form-text text-muted">
            Everyone has a favorite superhero; which do you want to search for?
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Search for superhero
        </button>
      </form>
    );
  }
}

export default SearchForm;
