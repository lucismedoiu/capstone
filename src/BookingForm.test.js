// BookingForm.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import { BrowserRouter } from "react-router-dom"; // For using `useNavigate`
import * as Yup from "yup";

// Mocking `useNavigate` for navigation testing
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

// Utility function to render the BookingForm with necessary props
const renderBookingForm = (props) => {
  return render(
    <BrowserRouter>
      <BookingForm {...props} />
    </BrowserRouter>
  );
};

// Initial test setup
describe("BookingForm Component", () => {
  const initialProps = {
    availableTimes: ["17:00", "18:00", "19:00", "20:00"], // Example available times
    updateTimes: jest.fn(), // Mock function
    submitForm: jest.fn(), // Mock function
  };

  it("should not show error messages if all fields are filled correctly", async () => {
    renderBookingForm(initialProps);

    // Fill in all form fields
    fireEvent.change(screen.getByLabelText("Choose date:"), { target: { value: "2024-10-15" } });
    fireEvent.change(screen.getByLabelText("Choose time:"), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText("Number of Guests:"), { target: { value: "5" } });
    fireEvent.change(screen.getByLabelText("Occasion:"), { target: { value: "Birthday" } });

    // Submit the form
    fireEvent.click(screen.getByText("Make Your Reservation"));

    // Check that no validation error messages are displayed
    expect(screen.queryByText("Please choose a valid date (today or later).")).toBeNull();
    expect(screen.queryByText("Please choose a valid time.")).toBeNull();
    expect(screen.queryByText("Number of guests is required.")).toBeNull();
    expect(screen.queryByText("Please select an occasion.")).toBeNull();
  });

  it("should show an error if the number of guests exceeds the maximum limit", async () => {
    renderBookingForm(initialProps);

    // Fill in all form fields, but with guests exceeding the maximum limit
    fireEvent.change(screen.getByLabelText("Choose date:"), { target: { value: "2024-10-15" } });
    fireEvent.change(screen.getByLabelText("Choose time:"), { target: { value: "18:00" } });
    fireEvent.change(screen.getByLabelText("Number of Guests:"), { target: { value: "11" } }); // 11 exceeds the max limit
    fireEvent.change(screen.getByLabelText("Occasion:"), { target: { value: "Birthday" } });

    // Submit the form
    fireEvent.click(screen.getByText("Make Your Reservation"));

    // Check that the error message for guests appears
    expect(await screen.findByText("Number of guests should be between 1 and 10.")).toBeInTheDocument();
  });

});
