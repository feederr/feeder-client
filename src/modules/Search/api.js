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

export const getChannels = ({ searchValue }) => ({
  url: `/channel?q=title=='*${searchValue}*'`,
  method: "get",
  headers: {
    Authorization: true
  }
});
