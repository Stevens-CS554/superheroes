import React from "react";

function SuperHeroListEntry({ hero }) {
  return <li>{hero.name} from stateless prop</li>;
}

export default SuperHeroListEntry;
