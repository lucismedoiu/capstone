// Main.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Main from "./components/Main";
import BookingForm from "./components/BookingForm"

// Mock the BookingForm component to isolate testing the Main component
jest.mock("./components/BookingForm", () => (props) => (
  <div>
    <h2>Booking Form Mock</h2>
    <div>Available Times: {props.availableTimes.join(", ")}</div>
    <button onClick={() => props.updateTimes({ type: "UPDATE_TIMES", payload: "2023-10-10" })}>
      Update Times
    </button>
  </div>
));

describe("Main Component", () => {
  it("should render the Main component with initial available times", () => {
    render(<Main />);
    expect(screen.getByText("Make a Booking")).toBeInTheDocument();
    expect(screen.getByText("Available Times: 17:00, 18:00, 19:00, 20:00, 21:00")).toBeInTheDocument();
  });

  it("should call updateTimes and update available times when button is clicked", () => {
    render(<Main />);
    const updateButton = screen.getByText("Update Times");

    // Check initial available times
    expect(screen.getByText("Available Times: 17:00, 18:00, 19:00, 20:00, 21:00")).toBeInTheDocument();

    // Simulate clicking the update button
    fireEvent.click(updateButton);

    // Verify that the times are updated (remains the same since initializeTimes doesn't change based on date)
    expect(screen.getByText("Available Times: 17:00, 18:00, 19:00, 20:00, 21:00")).toBeInTheDocument();
  });

  it("should render BookingForm component with props", () => {
    render(<Main />);
    expect(screen.getByText("Booking Form Mock")).toBeInTheDocument();
    expect(screen.getByText("Available Times: 17:00, 18:00, 19:00, 20:00, 21:00")).toBeInTheDocument();
  });

});
