import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

describe('BookingForm', () => {
  const mockSubmitForm = jest.fn();
  const availableTimes = ['12:00 PM', '1:00 PM', '2:00 PM'];

  beforeEach(() => {
    render(<BookingForm availableTimes={availableTimes} submitForm={mockSubmitForm} handleDateChange={jest.fn()} />);
  });

  // Step 1: Test HTML5 validation attributes
  it('should have required attributes for all fields', () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toHaveAttribute('required');

    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toHaveAttribute('required');

    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');

    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toHaveAttribute('required');
  });

  // Step 2: Test JavaScript validation functions
  it('validates form correctly', () => {
    // Valid input scenario
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-10-03' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: availableTimes[0] } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '2' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    // Attempt to submit the form
    fireEvent.click(screen.getByText(/make your reservation/i));

    // Check if submitForm was called
    expect(mockSubmitForm).toHaveBeenCalled();

    // Invalid input scenario
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '0' } });
    fireEvent.click(screen.getByText(/make your reservation/i));

    // Check if submitForm was not called due to validation failure
    expect(mockSubmitForm).toHaveBeenCalledTimes(1); // Ensure it was called only once
  });

 it('displays error messages when validation fails', async () => {
    // Attempt to submit without filling the form
    fireEvent.click(screen.getByText(/make your reservation/i));

    // Wait for error messages to be displayed
    expect(await screen.findByText(/please choose a valid date/i)).toBeInTheDocument();
    expect(await screen.findByText(/please choose a valid time/i)).toBeInTheDocument();
    expect(await screen.findByText(/number of guests should be between 1 and 10/i)).toBeInTheDocument();
    expect(await screen.findByText(/please select an occasion/i)).toBeInTheDocument();
});
});
