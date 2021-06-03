import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    rewardsContainer: {
      padding: theme.spacing(2.5),
    },
    dateText: {
      fontSize: "12px",
      marginBottom: theme.spacing(1),
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
