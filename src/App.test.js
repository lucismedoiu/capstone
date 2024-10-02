// src/tests/Main.test.js
import { initializeTimes, updateTimes } from './components/Main'

describe('Main Component Reducer Functions', () => {
  // Test for initializeTimes function
  test('initializeTimes returns the correct initial times array', () => {
    const expectedTimes = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];

    // Call the initializeTimes function and store the result
    const result = initializeTimes();

    // Assert that the result matches the expected array
    expect(result).toEqual(expectedTimes);
  });

  // Updated test for updateTimes function to validate `initializeTimes` output
  test('updateTimes returns the initial times array from initializeTimes when called with UPDATE_TIMES action', () => {
    const initialState = []; // The initial state can be an empty array
    const action = { type: 'UPDATE_TIMES', date: '2023-09-25' };

    // Call updateTimes with initial state and the action
    const result = updateTimes(initialState, action);

    // Expected output should match the value returned by initializeTimes
    const expectedTimes = initializeTimes();

    // Assert that the result is equal to the array from initializeTimes
    expect(result).toEqual(expectedTimes);
  });
});
