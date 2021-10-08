const postsReducer = (posts = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return posts;
  }
  //   if (action.type === "FETCH_POSTS") {
  //     return action.payload;
  //   }
  //   return posts;
};

export default postsReducer;
