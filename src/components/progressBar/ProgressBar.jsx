import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";
import styles from "./ProgressBar.module.scss";
export const ProgressBar = ({ value }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typography
        variant="body2"
        color="textSecondary"
        style={{
          marginRight: 16,
          fontSize: 22,
          fontWeight: 500,
          color: "#121417",
          fontFamily: "inherit",
        }}
      >
        {`${Math.round(value)}%`}
      </Typography>
      <CircularProgress
        variant="determinate"
        value={value}
        style={{
          color: "#2BD627",
          width: "26px",
          height: "26px",
          borderRadius: "100%",
          boxShadow: "inset 0 0 0px 3px #D4F8D3",
          backgroundColor: "transparent",
        }}
        thickness={5}
      />
    </div>
  );
};
