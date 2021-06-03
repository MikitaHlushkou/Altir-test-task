import { useSelector } from "react-redux";
import classNames from "classnames";
import { Grid, Typography } from "@material-ui/core";
import AvatarLogo from "../../shared/avatar";
import { IRewardsInitialState, IUserDataTypes } from "../../store/types";
import useStyles from "./styles";


const profileFields=[{
    title:'My rewards',
    neededReduxField:"rewards",
},{
    title:'Give',
    neededReduxField:"givenRewards",
}]

const ProfileInfo = (): JSX.Element => {
  const classes = useStyles();

  const { usersData, userName } = useSelector(
    (state: IRewardsInitialState) => state
  );

  const currentUserData = usersData.find(
    (user: IUserDataTypes) => user.userName === userName
  );

  return (
    <Grid container item wrap={"nowrap"}>
      <Grid className={classes.profileAvatar} item sm={2}>
        <AvatarLogo size={"large"} />
        <Typography className={classes.title}>{userName}</Typography>
      </Grid>

        {profileFields.map(({title, neededReduxField})=> <Grid item sm={3}>
            <Typography className={classes.title}>{title} </Typography>
            <Typography
                className={classNames(classes.title, classes.price)}
            >{`$ ${currentUserData?.[`${neededReduxField}`]}`}</Typography>
        </Grid>)}

    </Grid>
  );
};
export default ProfileInfo;
