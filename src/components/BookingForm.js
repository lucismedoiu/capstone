import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../Booking.css";
import { useNavigate } from "react-router-dom";

// Define validation schema using Yup
const BookingValidationSchema = Yup.object().shape({
  resDate: Yup.date()
    .required("Please choose a valid date (today or later).")
    .min(new Date(), "Date cannot be in the past."),
  resTime: Yup.string().required("Please choose a valid time."),
  guests: Yup.number()
    .min(1, "Number of guests should be between 1 and 10.")
    .max(10, "Number of guests should be between 1 and 10.")
    .required("Number of guests is required."),
  occasion: Yup.string().required("Please select an occasion."),
});

const BookingForm = ({ availableTimes, updateTimes, submitForm }) => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  return (
    <div className="form-container">
      <Formik
        initialValues={{ resDate: "", resTime: "", guests: 1, occasion: "" }}
        validationSchema={BookingValidationSchema}
        validateOnBlur={true} // Ensure validation occurs on blur
        validateOnChange={false} // Disable validation on change
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            submitForm(values); // Pass form values to submitForm function
            setSubmitting(false);
            navigate("/confirmed");
          }, 400);
        }}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="booking-form">
            {/* Date Field */}
            <label className="label" htmlFor="res-date">
              Choose date:
            </label>
            <Field
              className="form-element"
              type="date"
              id="res-date"
              name="resDate"
              onBlur={(e) => {
                const selectedDate = e.target.value;
                updateTimes({ type: "UPDATE_TIMES", payload: selectedDate }); // Dispatch the date change
                setFieldValue("resDate", selectedDate); // Update Formik's state
              }}
              required
              min={new Date().toISOString().split("T")[0]} // Prevent selecting dates before today
            />
            <ErrorMessage
              name="resDate"
              component="span"
              className="error-message"
            />

            {/* Time Field */}
            <label className="label" htmlFor="res-time">
              Choose time:
            </label>
            <Field
              as="select"
              className="form-element"
              id="res-time"
              name="resTime"
              required
            >
              <option value="">Select a time</option>
              {availableTimes.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="resTime"
              component="span"
              className="error-message"
            />

            {/* Number of Guests Field */}
            <label className="label" htmlFor="guests">
              Number of Guests:
            </label>
            <Field
              className="form-element"
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              required
            />
            <ErrorMessage
              name="guests"
              component="span"
              className="error-message"
            />

            {/* Occasion Field */}
            <label className="label" htmlFor="occasion">
              Occasion:
            </label>
            <Field
              as="select"
              className="form-element"
              id="occasion"
              name="occasion"
              required
            >
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </Field>
            <ErrorMessage
              name="occasion"
              component="span"
              className="error-message"
            />

            {/* Submit Button */}
            <button
              className="booking-button"
              type="submit"
              disabled={isSubmitting}
            >
              Make Your Reservation
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
