import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { IModalFormSecond } from "./types";
import useStyles from "./styles";


const ModalForm = ({
  children,
  handleButtonClose,
  handleSubmitButton,
  submitButtonText,
  isOpen,
}: IModalFormSecond): JSX.Element => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(isOpen), [isOpen]);

  return (
    <Dialog
      open={open}
      onClose={handleButtonClose}
      classes={{ paper: classes.paper }}
    >
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button
          type={"submit"}
          variant="contained"
          onClick={handleSubmitButton}
          color="primary"
        >
          {submitButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalForm;
