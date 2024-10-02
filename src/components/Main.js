import React, { useReducer, useEffect, useState } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from '../API'; // Import fetchAPI and submitAPI from API.js
import { useNavigate } from 'react-router-dom';

const initializeTimes = (date, bookings) => {
  let times = fetchAPI(new Date(date));
  // Filter out already booked times
  if (bookings[date]) {
    times = times.filter(time => !bookings[date].includes(time));
  }

  console.log(`Available times for ${date}:`, times); // Debugging log
  return times;
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'init':
      return action.payload;
    case 'update':
      return action.payload;
    default:
      return state;
  }
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const [bookings, setBookings] = useState({});
  const navigate = useNavigate(); // Use useNavigate hook

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed'); // Navigate to confirmation page
    } else {
      alert('Failed to submit the booking.');
    }
  };

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const times = initializeTimes(today, bookings);
    dispatch({ type: 'init', payload: times });
  }, [bookings]);

  const handleDateChange = (date) => {
    const times = initializeTimes(date, bookings);
    dispatch({ type: 'update', payload: times });
  };

  const handleBooking = (date, time) => {
    // Update bookings state
    setBookings(prevBookings => {
      const updatedBookings = { ...prevBookings };
      if (!updatedBookings[date]) {
        updatedBookings[date] = [];
      }
      updatedBookings[date].push(time); // Add the booked time
      console.log(`Updated bookings:`, updatedBookings); // Debugging log
      return updatedBookings; // Return the updated bookings
    });

    // Update available times for the current date after booking
    const times = initializeTimes(date, { ...bookings, [date]: [...(bookings[date] || []), time] });
    dispatch({ type: 'update', payload: times });
  };

  return (
    <div>
      <BookingForm 
        availableTimes={availableTimes} 
        handleDateChange={handleDateChange} 
        onBooking={handleBooking} 
        submitForm={submitForm} 
      />
    </div>
  );
}

export default Main;
