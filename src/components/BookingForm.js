import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../Booking.css";

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const BookingForm = ({ availableTimes, handleDateChange, submitForm }) => {
  const todayDate = getTodayDate();

  const formik = useFormik({
    initialValues: {
      selectedDate: todayDate,
      selectedTime: '',
      numberOfGuests: 1,
      occasion: ''
    },
    validationSchema: Yup.object({
      selectedDate: Yup.date()
        .min(todayDate, "Please choose a valid date (today or later).")
        .required("Date is required."),
      selectedTime: Yup.string().required("Please choose a valid time."),
      numberOfGuests: Yup.number()
        .min(1, "Number of guests should be at least 1.")
        .max(10, "Number of guests should not exceed 10.")
        .required("Number of guests is required."),
      occasion: Yup.string().required("Please select an occasion.")
    }),
    onSubmit: (values) => {
      submitForm(values);
    }
  });

  // Handle date change
  const onDateChange = (event) => {
    const newDate = event.target.value;
    formik.setFieldValue('selectedDate', newDate);
    handleDateChange(newDate);
  };

  return (
    <div className='form-container'>
      <form className="booking-form" onSubmit={formik.handleSubmit} noValidate>
        
        {/* Date Field */}
        <label className='label' htmlFor="selectedDate">Choose date:</label>
        <input 
          className={`form-element ${formik.touched.selectedDate && formik.errors.selectedDate ? 'error' : ''}`} 
          type="date" 
          id="selectedDate" 
          name="selectedDate" 
          value={formik.values.selectedDate} 
          onChange={onDateChange} 
          required 
          min={todayDate} 
        />
        {formik.touched.selectedDate && formik.errors.selectedDate && 
          <span className="error-message">{formik.errors.selectedDate}</span>
        }
        
        {/* Time Field */}
        <label className='label' htmlFor="selectedTime">Choose time:</label>
        <select 
          className={`form-element ${formik.touched.selectedTime && formik.errors.selectedTime ? 'error' : ''}`} 
          id="selectedTime" 
          name="selectedTime" 
          value={formik.values.selectedTime} 
          onChange={formik.handleChange} 
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((time, index) => (
            <option key={index} value={time}>{time}</option>
          ))}
        </select>
        {formik.touched.selectedTime && formik.errors.selectedTime && 
          <span className="error-message">{formik.errors.selectedTime}</span>
        }

        {/* Number of Guests Field */}
        <label className='label' htmlFor="numberOfGuests">Number of Guests:</label>
        <input 
          className={`form-element ${formik.touched.numberOfGuests && formik.errors.numberOfGuests ? 'error' : ''}`} 
          type="number"
          id="numberOfGuests"
          name="numberOfGuests"
          value={formik.values.numberOfGuests}
          onChange={formik.handleChange} 
          min="1"
          max='10'
          required
        />
        {formik.touched.numberOfGuests && formik.errors.numberOfGuests && 
          <span className="error-message">{formik.errors.numberOfGuests}</span>
        }

        {/* Occasion Field */}
        <label className='label' htmlFor="occasion">Occasion:</label>
        <select 
          className={`form-element ${formik.touched.occasion && formik.errors.occasion ? 'error' : ''}`} 
          id="occasion"
          name="occasion"
          value={formik.values.occasion}
          onChange={formik.handleChange}
          required
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
        {formik.touched.occasion && formik.errors.occasion && 
          <span className="error-message">{formik.errors.occasion}</span>
        }

        {/* Submit Button */}
        <button 
          className="booking-button" 
          type="submit"
          disabled={formik.isSubmitting || !availableTimes.length}
        >
          Make Your Reservation
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
