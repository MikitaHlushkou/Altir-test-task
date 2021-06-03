import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, FormikProps, Form } from "formik";
import moment from "moment";
import { validationSchema } from "./validationSchema";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import {
    addItemToFeed,
    addRewardToUser,
    takeRewardFromUser,
} from "../../store/rewards/rewards.actions";
import { IRewardUpForm } from "./types";
import { IRewardsInitialState } from "../../store/types";
import ModalForm from "../../shared/Modal";
import Input from "../../shared/input";
import useStyles from "./styles";

const initialValues = {
    awardedPerson: { label: "", value: "" },
    reward: 0,
    message: "",
};

const RewardsModal = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { usersData, userName } = useSelector(
    (state: IRewardsInitialState) => state
  );
  const optionsUsersData = usersData.map(({ userName }) => ({
    label: userName,
    value: userName,
  }));
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  const handleCloseButtonModal = (resetForm: () => void) => () => {
    setModalOpen(false);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={({ awardedPerson, reward, message }, actions) => {
        const initialsArray = awardedPerson.value.match(/\b(\w)/g);
        const awardedPersonInitials = initialsArray
          ? initialsArray.join("")
          : "";

        dispatch(
          addRewardToUser({ userName: awardedPerson.value, rewards: reward })
        );
        dispatch(takeRewardFromUser({ userName, rewards: reward }));

        dispatch(
          addItemToFeed({
            awardee: userName,
            awardedPerson: awardedPerson.value,
            awardedPersonInitials,
            date: moment(new Date()).format("MM/DD/YYYY"),
            message,
          })
        );
        actions.resetForm();
        setModalOpen(false);
      }}
    >
      {(props: FormikProps<IRewardUpForm>) => {
        const {
          values: { awardedPerson, message, reward },
          touched,
          errors,
          handleChange,
          handleSubmit,
          resetForm,
        } = props;

        return (
          <Form>
            <div>
              <Fab className={classes.openModalButton}>
                <AddIcon
                  onClick={openModal}
                  className={classes.openModalIcon}
                />
              </Fab>
            </div>
            <ModalForm
              handleButtonClose={handleCloseButtonModal(resetForm)}
              handleSubmitButton={handleSubmit}
              submitButtonText={"Reward"}
              isOpen={isModalOpen}
            >
              <Input
                label="To"
                id="awardedPerson"
                type={"selectable"}
                value={awardedPerson}
                handleFieldChange={handleChange}
                options={optionsUsersData}
                error={touched.awardedPerson && Boolean(errors.awardedPerson)}
                helperText={
                  touched.awardedPerson?.value && errors.awardedPerson?.value
                }
              />

              <Input
                label="Reward"
                id="reward"
                type="number"
                placeholder={"$30"}
                value={reward}
                handleFieldChange={handleChange}
                error={touched.reward && Boolean(errors.reward)}
                helperText={touched.reward && errors.reward}
              />

              <Input
                label="Why?"
                id="message"
                type="text"
                value={message}
                handleFieldChange={handleChange}
                isTextForm
                error={touched.message && Boolean(errors.message)}
                helperText={touched.message && errors.message}
              />
            </ModalForm>
          </Form>
        );
      }}
    </Formik>
  );
};
export default RewardsModal;
