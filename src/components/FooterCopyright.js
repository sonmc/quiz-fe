import { Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export default function FooterCopyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        admin page
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
