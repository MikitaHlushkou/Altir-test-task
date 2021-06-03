import { useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { IRewardsFeed, RewardsSection } from "./types";
import { IAllRewards, IRewardsInitialState } from "../../store/types";
import AvatarLogo from "../../shared/avatar";
import useStyles from "./styles";

const RewardFeed = ({ rewardSection }: IRewardsFeed): JSX.Element => {
  const classes = useStyles();

  const { allRewards, userName } = useSelector(
    (state: IRewardsInitialState) => state
  );

  const allRewardedMessages =
    rewardSection === RewardsSection.AllRewards
      ? allRewards
      : allRewards.filter(
          (item: IAllRewards) => item.awardedPerson === userName
        );

  return (
    <Grid item container>
      {allRewardedMessages.map(
        (
          {
            awardee,
            awardedPerson,
            date,
            message,
            awardedPersonInitials,
          }: IAllRewards,
          index
        ) => (
          <Grid
            key={index}
            container
            className={classes.rewardsContainer}
            wrap="nowrap"
            spacing={1}
          >
            <Grid item>
              <AvatarLogo avatarInitials={awardedPersonInitials} />
            </Grid>

            <Grid sm={10} item>
              <Typography>{`${awardedPerson} rewarded by ${awardee} `}</Typography>
              <Typography className={classes.dateText}>{date}</Typography>
              <Typography>{message}</Typography>
            </Grid>
          </Grid>
        )
      )}
    </Grid>
  );
};

export default RewardFeed;
