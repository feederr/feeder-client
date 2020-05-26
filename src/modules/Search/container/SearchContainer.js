import React, { useState } from "react";
import SearchPage from "../component";

const SearchContainer = props => {
  const { searchString, setSearchString } = useState("");

  return <SearchPage searchString={searchString} />;
};

export default SearchContainer;
