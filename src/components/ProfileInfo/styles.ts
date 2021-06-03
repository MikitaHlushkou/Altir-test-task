import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    profileAvatar: {
      margin: theme.spacing(0, 0, 1, 3),
    },
    title: {
      fontWeight: "bold",
      padding: theme.spacing(1),
    },
    price: {
      fontSize: "20px",
    },

    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  })
);

export default useStyles;
