import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
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

const AddButton: React.FC<propType> = React.memo(({ onClick }) => {
  const classes = useStyles();

  return (
    <Button className={classes.root} onClick={onClick}>
      <AddIcon />
    </Button>
  );
});

export default AddButton;
