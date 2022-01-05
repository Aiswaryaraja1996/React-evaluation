import axios from "axios";
import * as actions from "../redux/Action";

export const getRepo = (repoName) => (dispatch) => {
  const requestAction = actions.getRepoRequest();
  dispatch(requestAction);

  const config = {
    url: `https://api.github.com/search/repositories?q=${repoName}`,
    method: "GET",
  };
  return axios(config)
    .then((res) => {
      const successAction = actions.getRepoSuccess(res);
      dispatch(successAction);
    })
    .catch(() => {
      const failureAction = actions.getRepoFailure();
      dispatch(failureAction);
    });
};
