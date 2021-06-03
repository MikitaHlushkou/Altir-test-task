import { OptionTypeBase } from "react-select";

interface IOptionsSelect {
  label: string;
  value: string | number;
}
export interface IInputProps {
  label: string;
  type: string;
  isTextForm?: boolean;
  value: OptionTypeBase | number | string;
  placeholder?: string;
  id: string;
  min?: number;
  error?: boolean | undefined;
  helperText?: string | false;
  options?: IOptionsSelect[];
  handleFieldChange: (e: {
    target: {
      name: string;
      value: string;
    };
  }) => void;
}
