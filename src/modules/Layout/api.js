// should be created even without channels, just for future ability to add channels there

export const createNewCompilation = ({ compilationName, channels }) => ({
  url: `/compilation`,
  method: "post",
  data: {
    name: compilationName,
    channels: channels
  },
  headers: {
    Authorization: true
  }
});

export const getCompilations = () => ({
  url: `/compilation`,
  method: "get",
  headers: {
    Authorization: true
  }
});

// this actually doesn't work, it's just return info about compilation, but required to return info about all nested channels

export const getChannelsForCompilation = ({ compilationId }) => ({
  url: `/compilation/${compilationId}`,
  method: "get",
  headers: {
    Authorization: true
  }
});

export const updateCompilation = ({
  compilationId,
  compilationName,
  channels
}) => ({
  url: `/compilation/${compilationId}`,
  method: "get",
  data: {
    name: compilationName,
    channels: channels
  },
  headers: {
    Authorization: true
  }
});

export const deleteCompilation = ({ compilationId }) => ({
  url: `/compilation/${compilationId}`,
  method: "delete",
  headers: {
    Authorization: true
  }
});
