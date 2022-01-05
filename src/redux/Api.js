import axios from "axios";
import * as actions from "../redux/Action";

export const getRepo =
  (repoName, perPage = 5, page = 1) =>
  (dispatch) => {

    console.log("1");
    const requestAction = actions.getRepoRequest();
    dispatch(requestAction);

    const config = {
      url: `https://api.github.com/search/repositories?q=${repoName}&per_page=${perPage}&page=${page}`,
      method: "GET",
    };
    return axios(config)
      .then((res) => {
        console.log(res);
        const successAction = actions.getRepoSuccess(res.data);
        dispatch(successAction);
      })
      .catch(() => {
        const failureAction = actions.getRepoFailure();
        dispatch(failureAction);
      });
  };
