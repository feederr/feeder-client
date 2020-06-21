import React, { useEffect } from "react";
import HomeLayout from "../component/";
import { useSelector, useDispatch } from "react-redux";

export const HomeMainContainer = () => {
  const allChannels = useSelector(state => state.channel.allChannels);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch()
  // })

  return <HomeLayout />;
};
