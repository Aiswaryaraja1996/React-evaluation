import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        height: "80px",
        width: "100%",
        display: "flex",
        alignItems: "center",

        justifyContent: "flex-end",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          paddingRight: "1rem",
        }}
      >
        <Link style={{ textDecoration: "none", color: "white" }} to="/">
          HOME
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/login">
          LOGIN
        </Link>
        <Link style={{ textDecoration: "none", color: "white" }} to="/search">
          SEARCH
        </Link>
      </div>
    </div>
  );
}
