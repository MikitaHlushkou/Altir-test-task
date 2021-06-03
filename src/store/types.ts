export interface IUserDataTypes extends Record<string, any> {
  userName: string;
  rewards: number;
  givenRewards: number;
  initials: string;
}
export interface IAllRewards {
  awardee: string;
  awardedPerson: string;
  awardedPersonInitials: string | undefined;
  date: string;
  message: string;
}

export interface IRewardsInitialState {
  userName: string;
  allRewards: IAllRewards[];
  usersData: IUserDataTypes[];
}
