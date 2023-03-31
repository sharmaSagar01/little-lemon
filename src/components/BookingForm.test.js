import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import BookingForm from "./BookingForm";

describe("Testing Booking Form", () => {
  const availableTimes = ["17:00", "17:30"];
  const submitForm = jest.fn();
  const today = new Date().toISOString().split("T")[0];

  render(
    <BookingForm availableTimes={availableTimes} submitForm={submitForm} />
  );
  const numberOfGuestsInput = screen.getByLabelText(/Number of guests/);
  const submitButton = screen.getByRole("button");

  test("find the number of guests text in the BookingForm", () => {
    expect(numberOfGuestsInput).toBeInTheDocument();
  });

  test("find the submit button on the Booking Form", () => {
    expect(submitButton).toHaveAttribute("type", "submit");
  });
});
