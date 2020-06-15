import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  followNewSourceRequest,
  getCategoriesRequest
} from "../../../store/actions";
import FollowLayout from "../component/";

export const FollowMainContainer = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [rssLink, setRssLink] = useState("");
  const dispatch = useDispatch();
  const categoriesList = useSelector(state => state.follow.categories);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function onSelectedCategoryChanged(option, selectedValues) {
    const idsOfSelectedValues = selectedValues.map(value => value.id);
    setSelectedCategories(idsOfSelectedValues);
  }

  function onRssLinkChanged(event) {
    const newValue = event.target.value;
    if (newValue !== null) {
      setRssLink(newValue);
    }
  }

  function followNewSource(event) {
    if (event.keyCode === 13) {
      const resourceInfo = {
        categoriesId: selectedCategories,
        rssLink
      };
      if (selectedCategories !== "" || rssLink !== "") {
        console.log(resourceInfo);
        dispatch(followNewSourceRequest(resourceInfo));
      } else {
        setIsModalOpen(true);
      }
    }
  }

  useEffect(() => {
    dispatch(getCategoriesRequest());
  }, [dispatch]);

  return (
    <FollowLayout
      onSelectedCategoryChanged={onSelectedCategoryChanged}
      isModalOpen={isModalOpen}
      toggleModal={toggleModal}
      categoriesList={categoriesList}
      rssLink={rssLink}
      onRssLinkChanged={onRssLinkChanged}
      followNewSource={followNewSource}
    />
  );
};
