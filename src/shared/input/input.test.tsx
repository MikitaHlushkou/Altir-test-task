import React from "react";
import { render, screen } from "@testing-library/react";
import Input from "./index";

describe("<Input />", () => {
  beforeEach(() => {
    render(
      <Input
        handleFieldChange={() => {
          return;
        }}
        label="Label"
        type="text"
        value="testValue"
        id="test"
      />
    );
  });

  test("should render Input component", () => {
    const input = screen.getByRole("input");
    expect(input).toBeInTheDocument();
  });
  test("should not be required or disabled", () => {
    const input = screen.getByRole("input");
    expect(input).not.toBeRequired();
    expect(input).not.toBeDisabled();
  });
});
