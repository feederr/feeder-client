import React, { useState, useEffect } from "react";
import SearchPage from "../component";
import { useSelector, useDispatch } from "react-redux";
import { fromEvent } from "rxjs";
import { filter, debounceTime, map } from "rxjs/operators";
import { getChannelsRequest } from "../store/actions";

const SearchContainer = () => {
  const [searchStringValue, setSearchStringValue] = useState("");
  const [typeOfSearch, setTypeOfSearch] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  function onSearchStringChanged(event) {
    const newValue = event.target.value;
    if (newValue !== null) {
      setSearchStringValue(event.target.value);
    }
  }

  function onTypeOfSearchChanged(event) {
    const newSearchType = event.target.value;
    setTypeOfSearch(newSearchType);
  }

  useEffect(() => {
    // it's better to use useRef hook to get ref of input field
    const searchStringInput = document.getElementById("searchString");
    const observable = fromEvent(searchStringInput, "input").pipe(
      debounceTime(500),
      map(x => x.target.value),
      filter(value => value.length > 2)
    );
    const subscription = observable.subscribe(searchValue => {
      console.log(searchValue);
      const getChannelObj = {
        searchValue,
        typeOfSearch
      };
      dispatch(getChannelsRequest(getChannelObj));
      setIsLoading(true);
    });
    return () => subscription.unsubscribe();
  }, [dispatch, typeOfSearch]);

  return (
    <SearchPage
      searchStringValue={searchStringValue}
      onSearchStringChanged={onSearchStringChanged}
      isLoading={isLoading}
      typeOfSearch={typeOfSearch}
      onTypeOfSearchChanged={onTypeOfSearchChanged}
    />
  );
};

export default SearchContainer;

const SearchTypesEnum = {
  Author: 0,
  Title: 1,
  Description: 2
};
