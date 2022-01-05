import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/Search";

export default function Allroutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/search">
        <Search />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
