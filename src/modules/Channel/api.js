export const getNewsForChannel = ({ channelId }) => ({
  url: `/item?q=channel.id==${channelId}`,
  method: "get",
  headers: {
    Authorization: true
  }
});
