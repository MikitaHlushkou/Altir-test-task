import  { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { RewardsSection } from "../components/RewardsFeed/types";
import TabsMenu from "../components/TabsMenu";
import RewardFeed from "../components/RewardsFeed";
import ProfileInfo from "../components/ProfileInfo";

const RewardPage = (): JSX.Element => {
  const [feedType, setFeedType] = useState(RewardsSection.AllRewards);

  const handleChange = (newValue: number) => {
    switch (newValue) {
      case 0:
        setFeedType(RewardsSection.AllRewards);
        break;

      case 1:
        setFeedType(RewardsSection.PrivateRewards);
        break;

      default:
        setFeedType(RewardsSection.AllRewards);
        break;
    }
  };

  return (
    <Grid container direction="column" justify="center">
      <ProfileInfo />
      <TabsMenu handleChange={handleChange} />
      <RewardFeed rewardSection={feedType} />
    </Grid>
  );
};

export default RewardPage;
