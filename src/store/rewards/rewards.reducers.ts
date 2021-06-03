import { RewardsInitialState } from "./rewards.initialState";

import { handleActions } from "redux-actions";
import { IAllRewards, IRewardsInitialState } from "../types";

export const RewardsReducer = handleActions(
  {
    ADD_REWARD_TO_USER: (
      state,
      { payload }: { payload: { rewards: number; userName: string } }
    ) => ({
      ...state,
      usersData: state.usersData.map((user) =>
        user.userName === payload.userName
          ? { ...user, rewards: user.rewards + payload.rewards }
          : user
      ),
    }),
    TAKE_REWARD_FROM_USER: (
      state,
      { payload }: { payload: { rewards: number; userName: string } }
    ) => ({
      ...state,
      usersData: state.usersData.map((user) =>
        user.userName === payload.userName
          ? {
              ...user,
              rewards: user.rewards - payload.rewards,
              givenRewards: user.givenRewards + payload.rewards,
            }
          : user
      ),
    }),
    // @ts-ignore
    ADD_ITEM_TO_FEED: (
      state,
      { payload }: { payload: IAllRewards }
    ): IRewardsInitialState => ({
      ...state,
      allRewards: [payload, ...state.allRewards],
    }),
  },
  RewardsInitialState
);
