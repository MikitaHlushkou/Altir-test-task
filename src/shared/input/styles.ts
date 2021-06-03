import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      marginTop: theme.spacing(2),
    },
    label: {
      fontWeight: "bold",
    },
  })
);

export default useStyles;
