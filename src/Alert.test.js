import React from "react";
import Alert, { ALERT_TYPES } from "./Alert";
import { render, fireEvent } from "@testing-library/react";

it("should close when the close button is clicked", () => {
  const { findByLabelText, queryByRole } = render(<Alert>Message</Alert>);
  fireEvent.click(findByLabelText("Close alert dialog"));
  expect(queryByRole("alert")).toBeNull();
});

it("should close when the Escape key is pressed", () => {
  const { queryByRole } = render(<Alert>Message</Alert>);
  fireEvent.keyDown(queryByRole("alert"), { key: "Escape", code: 27 });
  expect(queryByRole("alert")).toBeNull();
});

it("should NOT close when the Escape key is pressed if closable is false", () => {
  const { getByRole } = render(<Alert closable={false}>Message</Alert>);
  fireEvent.keyDown(getByRole("alert"), { key: "Escape", code: 27 });
  getByRole("alert");
});
