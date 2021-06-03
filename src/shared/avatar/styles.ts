import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },

    regular: {
      width: theme.spacing(6.25),
      height: theme.spacing(6.25),
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  })
);

export default useStyles;
