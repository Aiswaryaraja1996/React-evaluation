import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Home() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  const [repo, setRepo] = useState(null);
  const [perPage, setPerPage] = useState(5);
  const history = useHistory();

  if (!isAuth) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>SEARCH FOR GITHUB REPOSITORIES</h2>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={(e) => setRepo(e.target.value)}
        />
        <br />

        <Button
          variant="contained"
          onClick={() => {
            history.push(`/search?q=${repo}`);
          }}
        >
          SEARCH
        </Button>
      </Box>
    </div>
  );
}
