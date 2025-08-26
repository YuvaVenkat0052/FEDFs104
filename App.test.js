import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";

test("renders booking form fields", () => {
  render(<BookingForm />);
  expect(screen.getByLabelText(/Choose Date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose Time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
});

test("shows validation errors on empty submit", () => {
  render(<BookingForm />);
  fireEvent.click(screen.getByRole("button", { name: /book table/i }));
  expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
  expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
});
