import {  makeStyles,  } from "@material-ui/core/styles";

const useStyles = makeStyles(
  {
    root: {
      flexGrow: 1,
    },
    openModalButton: {
      position: "absolute",
      right: "20px",
      bottom: "-25px",
      backgroundColor: "white",
    },
    openModalIcon: {
      height: "40px",
      width: "40px",
      color: "darkslategrey",
    },
  }
);

export default useStyles;
