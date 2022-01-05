import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRepo } from "../redux/Api";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Search() {
  const isLoading = useSelector((state) => state.repo.isLoading);
  const repos = useSelector((state) => state.repo.repos.items);
  const search = useLocation().search;
  const repoName = new URLSearchParams(search).get("q");
  const dispatch = useDispatch();

  useEffect(() => dispatch(getRepo(repoName)), []);

  console.log(repos);

  return (
    <div style={{ textAlign: "center" }}>
      {isLoading && <h4>Loading...</h4>}

      <h2>SEARCH RESULT</h2>

      <Box sx={{ flexGrow: 1, marginTop: "2rem" }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {!isLoading &&
            repos?.map((item) => (
              <Grid item xs={3} key={item.id}>
                <Item>
                  <p>
                    <b>{item.full_name}</b>
                  </p>
                  <p>{item.description}</p>
                </Item>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
}
