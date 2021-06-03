import CreatableSelect from "react-select/creatable";
import TextField from "@material-ui/core/TextField";
import { IInputProps } from "./types";
import useStyles from "./styles";

const Input = ({
  label,
  id,
  type,
  value,
  placeholder,
  isTextForm,
  handleFieldChange,
  error = false,
  helperText,
  options,
}: IInputProps): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.input}>
      <label className={classes.label} htmlFor={id}>
        {label}
      </label>
      {type !== "selectable" ? (
        <TextField
          id={id}
          name={id}
          role={"input"}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleFieldChange}
          variant={"outlined"}
          fullWidth
          error={error}
          multiline={isTextForm && true}
          rows={isTextForm ? 3 : 1}
        />
      ) : (
        <CreatableSelect
          value={value}
          name={id}
          role={"input"}
          id={id}
          onChange={(selectedOption) => {
            const event = {
              target: { name: "awardedPerson", value: selectedOption },
            };
            handleFieldChange(event);
          }}
          options={options}
        />
      )}
      {error && (
        <div style={{ color: "red", marginTop: ".5rem" }}>{helperText}</div>
      )}
    </div>
  );
};
export default Input;
