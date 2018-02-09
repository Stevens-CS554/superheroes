import React, { Component } from "react";
import SuperHeroListEntry from "./SuperHeroListEntry";

class SuperHeroList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.heroList.length} results</h1>
        <ul>
          {this.props.heroList.map(hero => {
            return <SuperHeroListEntry hero={hero} key={hero.id} />;
          })}
        </ul>
      </div>
    );
  }
}

export default SuperHeroList;
