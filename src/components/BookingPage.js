import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({availableTimes, dispatch}) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Booking Page</h1>
      <p>Please fill in the form below to make your reservation.</p>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;