import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getRepo } from "../redux/Api";
import { useState } from "react";

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
  const repos = useSelector((state) => state.repo.repos);
  const search = useLocation().search;
  const [page, setPage] = useState(1);
  const repoName = new URLSearchParams(search).get("q");
  const dispatch = useDispatch();

  const [perPage, setPerPage] = useState(5);

  useEffect(() => dispatch(getRepo(repoName, perPage, page)), [page, perPage]);

  const Pagination = ({ total, currPage, onPageChange }) => {
    const Pages = new Array(total).fill(0);
    return (
      <div
        style={{
          display: "flex",
          marginTop: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Pages.map((value, index) =>
          currPage === index + 1 ? (
            <button
              style={{
                textDecoration: "none",
                outline: "none",
                borderStyle: "none",
                cursor: "pointer",
              }}
              disabled
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          ) : (
            <button
              style={{
                textDecoration: "none",
                outline: "none",
                borderStyle: "none",
                cursor: "pointer",
              }}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    );
  };

  return (
    <div style={{ textAlign: "center" }}>
      {isLoading && <h4>Loading...</h4>}

      <h2>SEARCH RESULT</h2>

      <label for="perPage">Choose per page value:</label>

      <select name="perPage" onChange={(e) => setPerPage(e.target.value)}>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>

      <Pagination
        currPage={page}
        total={5}
        onPageChange={(page) => setPage(page)}
      ></Pagination>

      <Box sx={{ flexGrow: 1, marginTop: "2rem" }}>
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {!isLoading &&
            repos.items?.map((item) => (
              <Grid item xs={12} xl={3} lg={4} md={6} sm={12} key={item.id}>
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
