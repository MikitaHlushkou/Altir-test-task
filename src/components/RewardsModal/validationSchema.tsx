import * as Yup from "yup";

export const validationSchema = Yup.object({
  awardedPerson: Yup.object({
    label: Yup.string(),
    value: Yup.string().required("Please select name"),
  }),
  reward: Yup.number().moreThan(0).required("Reward must be greater than 0"),
  message: Yup.string(),
});
