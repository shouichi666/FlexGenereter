import React from "react";
import IconButton from "@material-ui/core/IconButton";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Tooltip from "@material-ui/core/Tooltip";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background:
        "linear-gradient(45deg, rgba( 232, 218, 74, 0.30 ) 30%, rgba( 74, 91, 232, 0.50 ) 80%)",
      border: 0,
      borderRadius: 5,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      height: "50px",
      width: "50px",
      padding: "0",
    },
  })
);

type propType = {
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const CopyButton: React.FC<propType> = React.memo(({ onClick }) => {
  const classes = useStyles();

  return (
    <Tooltip title="COPY" placement="left">
      <IconButton className={classes.root} onClick={onClick}>
        <FileCopyIcon />
      </IconButton>
    </Tooltip>
  );
});

export default CopyButton;
