export const getAllCategories = () => ({
  url: `/category`,
  method: "get",
  headers: {
    Authorization: true
  }
});

export const followNewSource = ({ rssLink, categoriesId }) => ({
  url: "/channel",
  method: "post",
  data: {
    link: rssLink,
    categories: categoriesId
  },
  headers: {
    Authorization: true
  }
});
