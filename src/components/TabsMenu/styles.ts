import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    tabsMenu: {
      marginLeft: theme.spacing(6),
      textTransform: "none",
      marginBottom: theme.spacing(1),
    },
    divider: {
      position: "relative",
    },
    tab: {
      padding: theme.spacing(0),
      marginRight: theme.spacing(2),
      textTransform: "none",
      fontWeight: 600,
      minWidth: "fit-content",
    },

    scroller: {
      height: "5px",
    },
  })
);

export default useStyles;
