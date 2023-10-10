import * as React from "react";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography } from "@mui/material";

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
        value={0}
        size={40}
        style={{
          color: "#2BD627",
        }}
      />
    </div>
  );
};
