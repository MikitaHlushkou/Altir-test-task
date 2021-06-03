import { ReactNode } from "react";

export interface IModalFormSecond {
  children: ReactNode;
  isOpen: boolean;
  handleButtonClose: () => void;
  handleSubmitButton: () => void;
  submitButtonText: string;
}
