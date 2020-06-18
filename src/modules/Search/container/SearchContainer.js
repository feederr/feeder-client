import React, { useState, useEffect } from "react";
import SearchPage from "../component";
import { useSelector, useDispatch } from "react-redux";
import { fromEvent } from "rxjs";
import { filter, debounceTime, map } from "rxjs/operators";
import { getChannelsRequest } from "../store/actions";

const SearchContainer = () => {
  const [searchStringValue, setSearchStringValue] = useState("");
  const [typeOfSearch, setTypeOfSearch] = useState(0);
  const [isChannelSelected, setIsChannelSelected] = useState(false);
  const [selectedChannel, setSelectedChannel] = useState({});
  const isChannelsLoading = useSelector(
    state => state.search.isChannelsLoading
  );
  const foundedChannels = useSelector(state => state.search.foundedChannels);
  const dispatch = useDispatch();

  function onSearchStringChanged(event) {
    const newValue = event.target.value;
    if (newValue !== null) {
      setSearchStringValue(event.target.value);
    }
  }

  function onChannelSelected(event, option) {
    if (
      event.type === "click" ||
      (event.type === "keydown" && event.keyCode === 13)
    ) {
      setIsChannelSelected(true);
      setSelectedChannel(option);
    }
  }

  function onTypeOfSearchChanged(event) {
    const newSearchType = event.target.value;
    setTypeOfSearch(newSearchType);
  }

  useEffect(() => {
    // it's better to use useRef hook to get ref of input field
    const searchStringInput = document.getElementById("searchString");
    if (searchStringInput) {
      const observable = fromEvent(searchStringInput, "input").pipe(
        debounceTime(500),
        map(x => x.target.value),
        filter(value => value.length > 2)
      );
      const subscription = observable.subscribe(searchValue => {
        const getChannelObj = {
          searchValue,
          typeOfSearch
        };
        dispatch(getChannelsRequest(getChannelObj));
      });
      return () => subscription.unsubscribe();
    }
  }, [dispatch, typeOfSearch]);

  return (
    <SearchPage
      searchResults={foundedChannels}
      searchStringValue={searchStringValue}
      onSearchStringChanged={onSearchStringChanged}
      isLoading={isChannelsLoading}
      typeOfSearch={typeOfSearch}
      onTypeOfSearchChanged={onTypeOfSearchChanged}
      isChannelSelected={isChannelSelected}
      onChannelSelected={onChannelSelected}
      selectedChannel={selectedChannel}
    />
  );
};

export default SearchContainer;

// const mockData = [
//   {
//     title: "news - Carscoops",
//     imageUrl:
//       "http://storage.googleapis.com/site-assets/FltBwyDCuSEcTlqvvbW79zpnE-5C9YWkyyzwSlPQM-M_visual-162a62a28c4"
//   },
//   {
//     title: "Cars UK",
//     imageUrl:
//       "http://storage.googleapis.com/site-assets/j6rzrjG9dGS4Kxb9wi6F-MWaVTSfJZtbhj1iY0oahrA_visual-169b3cfa025"
//   },
//   {
//     title: "Cars! Cars! Cars!",
//     imageUrl:
//       "http://storage.googleapis.com/site-assets/3GQxT5IRw8qamPN3kRyNf97SOJ3-bHnOB068ZXfVnCk_visual-1620f033de7"
//   },
//   {
//     title: "Cars - Ars Technica",
//     imageUrl:
//       "http://storage.googleapis.com/site-assets/sdqjRNsWTGVTIJN2JTOS0zigbWfGQnZwDtoGCuQ36Z0_visual-15b93576979"
//   },
//   {
//     title: "Cars | Digital Trends",
//     imageUrl:
//       "http://storage.googleapis.com/site-assets/NzJCVL7nVnMgCNJOuQFlnpy29lLGVANwSprtgpC9Ww8_visual-16d78d6aa2b"
//   }
// ];
//
// const SearchTypesEnum = {
//   Author: 0,
//   Title: 1,
//   Description: 2
// };
