import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useState } from "react";
import * as actions from "../redux/Action";
import { Redirect } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [userName, setUserName] = useState(null);
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>LOGIN</h2>{" "}
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
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />

        <TextField id="outlined-basic" variant="outlined" />
        <br />

        <Button
          variant="contained"
          onClick={() => {
            const actionLogin = actions.loginSuccess(userName);
            dispatch(actionLogin);
          }}
        >
          LOGIN
        </Button>
      </Box>
    </div>
  );
}
