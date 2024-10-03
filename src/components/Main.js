import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

const initializeTimes = () => {
  // This is the initial state for available times
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now, we are returning the same set of times irrespective of the date.
      // In a real application, this would filter or fetch times based on the selected date.
      return initializeTimes();
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (values) => {
    console.log("Form Submitted!", values);
  };

  return (
    <div>
      <h1>Make a Booking</h1>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm} />
    </div>
  );
};

export default Main;
