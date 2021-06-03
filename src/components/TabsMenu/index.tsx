import  { ChangeEvent, useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { ITabsMenu } from "./types";
import RewardsModal from "../RewardsModal";
import useStyles from "./styles";

const TabsMenu = ({ handleChange }: ITabsMenu): JSX.Element => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleTabChange = (
    event: ChangeEvent<Record<string, unknown>>,
    newValue: number
  ) => {
    setValue(newValue);
    handleChange(newValue);
  };

  return (
    <>
      <Grid item>
        <Tabs
          value={value}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          classes={{ root: classes.tabsMenu, indicator: classes.scroller }}
        >
          <Tab className={classes.tab} label="Feed" />
          <Tab className={classes.tab} label="My Rewards" />
        </Tabs>
      </Grid>

      <Grid item className={classes.divider}>
        <Divider />
        <RewardsModal />
      </Grid>
    </>
  );
};

export default TabsMenu;
