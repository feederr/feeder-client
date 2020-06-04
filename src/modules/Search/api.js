export const getChannelById = channelId => ({
  url: `/channel/${channelId}`,
  method: "get",
  headers: {
    Authorization: true
  }
});

export const getChannelsByDescription = description => ({
  url: `/channel?q=description==${description}`,
  method: "get",
  headers: {
    Authorization: true
  }
});

export const getChannelsByAuthor = author => ({
  url: `/channel?q=description==${author}`,
  method: "get",
  headers: {
    Authorization: true
  }
});

export const getChannelsByIds = author => ({
  url: `/channel?q=description==${author}`,
  method: "get",
  headers: {
    Authorization: true
  }
});

export const getChannels = ({ type, value }) => {
  let url;
  switch (type) {
    case "author":
      url = `/channel?q=author==${value}`;
      break;
    case "description":
      url = `/channel?q=description==${value}`;
      break;
    case "title":
      url = `/channel?q=title==${value}`;
      break;
    default:
      return null;
  }
  return {
    url,
    method: "get",
    headers: {
      Authorization: true
    }
  };
};
