import * as React from "react";
import styles from "./CircularProgress.module.scss";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { selectTasksCount } from "../../redux/words/wordsSelector";
import { useSelector } from "react-redux";
import { StyledEngineProvider } from "@mui/material/styles";

function CircularProgressWithLabel(props) {
  const [circleSize, setCircleSize] = React.useState({
    width: "58px",
    height: "58px",
  });
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setCircleSize({ width: "44px", height: "44px" });
      } else {
        setCircleSize({ width: "58px", height: "58px" });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <StyledEngineProvider injectFirst>
      <Box
        className={styles.progressCircular}
        sx={{
          position: "relative",
          display: "inline-flex",
        }}
      >
        <CircularProgress
          className={styles.progressCircul}
          style={{
            color: "#85aa9f",
            width: circleSize.width,
            height: circleSize.height,
          }}
          variant="determinate"
          value={props.normalise(props.value)}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            className={styles.progressValue}
          >
            {`${Math.round(props.progressCounterValue)}`}
          </Typography>
        </Box>
      </Box>
    </StyledEngineProvider>
  );
}

export default function CircularWithValueLabel({ currentKey }) {
  const taskValue = useSelector(selectTasksCount);
  const [progress, setProgress] = React.useState(0);

  const progressCounterValue = taskValue - currentKey;
  const normalise = (value) => ((value - 0) * 110) / (taskValue - 0);
  React.useEffect(() => {
    setProgress((prevProgress) =>
      prevProgress >= taskValue ? 0 : prevProgress + currentKey
    );
  }, [currentKey, taskValue]);

  return (
    <StyledEngineProvider injectFirst>
      <CircularProgressWithLabel
        normalise={normalise}
        value={currentKey}
        progressCounterValue={progressCounterValue}
      />
    </StyledEngineProvider>
  );
}
