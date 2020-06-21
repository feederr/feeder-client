import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { withRouter } from "react-router";
import OptionalMenuLayout from "../component";
import { useDispatch, useSelector } from "react-redux";
import { RedirectToAnotherComponent } from "../../Sidebar/container/SidebarContainer";
import {
  createNewCompilationRequest,
  getCompilationsRequest
} from "../../../store/actions";

const OptionalMenuContainer = props => {
  const currentPathName = useLocation().pathname;
  const [channelsListOpened, setChannelsListOpened] = useState(false);
  const [compilationName, setCompilationName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const allCompilations = useSelector(state => state.layout.compilationsList);
  const isCompilationCreating = useSelector(
    state => state.layout.isCompilationCreating
  );
  const isCompilationCreated = useSelector(
    state => state.layout.isCompilationCreated
  );
  console.log(allCompilations);

  function loadTopicChannels() {
    setChannelsListOpened(!channelsListOpened);
  }

  function redirectToSpecificSection(redirectPath) {
    RedirectToAnotherComponent(redirectPath, props.history);
  }

  function onToggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  function onCompilationNameChanged(event) {
    setCompilationName(event.target.value);
  }

  function saveNewCompilation() {
    if (compilationName !== "") {
      dispatch(createNewCompilationRequest({ compilationName, channels: [] }));
    }
  }

  useEffect(() => {
    dispatch(getCompilationsRequest());
  }, [dispatch]);

  return (
    <OptionalMenuLayout
      allCompilations={allCompilations}
      saveNewCompilation={saveNewCompilation}
      compilationName={compilationName}
      onCompilationNameChanged={onCompilationNameChanged}
      isModalOpen={isModalOpen}
      onToggleModal={onToggleModal}
      currentPathName={currentPathName}
      channelsListOpened={channelsListOpened}
      loadTopicChannels={loadTopicChannels}
      redirectToSpecificSection={redirectToSpecificSection}
      isCompilationCreating={isCompilationCreating}
      isCompilationCreated={isCompilationCreated}
    />
  );
};

export default withRouter(OptionalMenuContainer);
