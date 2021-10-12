import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

// Added fetchPostsAndUsers to debug the overfetching of users problem
export const fetchPostsAndUsers = () => {
  return async (dispatch, getState) => {
    // Dispatching the fetchPosts action creator and waiting till all the posts are fetched
    await dispatch(fetchPosts());
    // Fetching all the unique userIds from the posts using lodash
    const userIds = _.uniq(_.map(getState().posts, "userId"));
    // Dispatching fetchUser action creator to fetch all the users
    userIds.forEach((id) => dispatch(fetchUser(id)));
  };
};

export const fetchPosts = () => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");
    dispatch({
      type: "FETCH_POSTS",
      payload: response.data,
    });
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({
      type: "FETCH_USER",
      payload: response.data,
    });
  };
};
