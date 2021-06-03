import classNames from "classnames";
import { IAvatar } from "./types";
import Avatar from "@material-ui/core/Avatar";
import useStyles from "./styles";

const AvatarLogo = ({ avatarInitials, size }: IAvatar): JSX.Element => {
  const classes = useStyles();
  const isLarge = size === "large";
  return (
    <Avatar
      alt="avatar logo"
      className={classNames(classes.regular, {
        [classes.large]: isLarge,
      })}
    >
      {avatarInitials}
    </Avatar>
  );
};

export default AvatarLogo;
