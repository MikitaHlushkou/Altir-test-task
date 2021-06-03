import { createActions } from "redux-actions";

export const {
  addRewardToUser,
  takeRewardFromUser,
  addItemToFeed,
} = createActions(
  "ADD_REWARD_TO_USER",
  "ADD_ITEM_TO_FEED",
  "TAKE_REWARD_FROM_USER"
);
