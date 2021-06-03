import React from "react";
import { render, screen } from "@testing-library/react";
import ModalForm from "./index";
import Input from "../input";

describe("<RewardsModal />", () => {
  beforeEach(() => {
    render(
      <ModalForm
        handleButtonClose={() => {
          return;
        }}
        handleSubmitButton={() => {
          return;
        }}
        children={
          <div>
            <Input
              handleFieldChange={() => {
                return;
              }}
              label="Label"
              type="text"
              value="testValue1"
              id="test1"
            />
            <Input
              handleFieldChange={() => {
                return;
              }}
              label="Label"
              type="text"
              value="testValue2"
              id="test2"
            />
            <Input
              handleFieldChange={() => {
                return;
              }}
              label="Label"
              type="text"
              value="testValue3"
              id="test3"
            />
          </div>
        }
        submitButtonText={"Submit button text"}
        isOpen={true}
      />
    );
  });

  test("should render 3 inputs as children", () => {
    const inputs = screen.getAllByRole("input");
    expect(inputs).toHaveLength(3);
  });
  test("should render button with provided text", () => {
    const submitButton = screen.getByText("Submit button text");
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveTextContent("Submit button text");
  });
});
