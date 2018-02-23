import React, { Component } from "react";
import { Link } from "react-router-dom";

class SuperHeroList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.heroList.length} results</h1>
        <ul>
          {this.props.heroList.map(hero => {
            return (
              <li>
                <Link key={hero.id} to={`/superhero/${hero.id}`}>
                  {hero.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default SuperHeroList;
