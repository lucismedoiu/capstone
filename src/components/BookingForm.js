import React, { useState } from 'react';
import "../Booking.css"


const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const BookingForm = ({ availableTimes, handleDateChange, onBooking, submitForm }) => {
    const [selectedDate, setSelectedDate] = useState(getTodayDate());
    const [numberOfGuests, setNumberOfGuests] = useState(1); // Default to 1 guest
    const [occasion, setOccasion] = useState(''); // Default empty occasion

    const onDateChange = (event) => {
        const newDate = event.target.value;
        setSelectedDate(newDate);
        handleDateChange(newDate);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        let data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });
        data['number-of-guests'] = numberOfGuests;
        data['occasion'] = occasion;

        submitForm(data); // Call the submitForm function here
    };

    return (
      <div className='form-container'>  <form className="booking-form" onSubmit={handleSubmit}>
      <label className='label' htmlFor="res-date">Choose date:</label>
      <input className='form-element' type="date" id="res-date" name="res-date" value={selectedDate} onChange={onDateChange} />

      <label className='label' htmlFor="res-time">Choose time:</label>
      <select className='form-element' id="res-time" name="res-time">
        {availableTimes.map((time, index) => (
          <option key={index} value={time}>{time}</option>
        ))}
          </select>
        <label className='label' htmlFor="number-of-guests">Number of Guests:</label>
      <input className='form-element'
        type="number"
        id="number-of-guests"
        name="number-of-guests"
        value={numberOfGuests}
        onChange={(e) => setNumberOfGuests(e.target.value)} 
        min="1" // Minimum 1 guest
        max='10'
        required // Make this field required
      />

      <label className='label' htmlFor="occasion">Occasion:</label>
      <select className='form-element'
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Other">Other</option>
      </select>

      <button className="booking-button" type="submit">Make Your Reservation</button>
    </form></div>
  );
};

export default BookingForm;
