export const getNewsForChannel = ({ channelId }) => ({
  url: `/item?q=channel.id==${channelId}`,
  method: "get",
  headers: {
    Authorization: true
  }
});

export const getStatisticsForItem = ({ itemId }) => ({
  url: `/item-statistics/${itemId}`,
  method: "get",
  headers: {
    Authorization: true
  }
});

export const getStatisticsForChannel = ({ channelId }) => ({
  url: `/item-statistics/${channelId}`,
  method: "get",
  headers: {
    Authorization: true
  }
});
