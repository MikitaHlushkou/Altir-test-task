export interface IRewardUpForm {
  awardedPerson: IAwardedPerson;
  reward: number;
  message: string;
}
interface IAwardedPerson {
  label: string;
  value: string | number;
}
