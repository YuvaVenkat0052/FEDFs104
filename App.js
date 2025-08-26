import React from "react";
import BookingForm from "./components/BookingForm";

export default function App() {
  return (
    <div className="App">
      <header role="banner" className="header">
        <h1>Little Lemon Restaurant</h1>
        <p>Book a Table</p>
      </header>
      <main role="main" className="container">
        <BookingForm />
      </main>
      <footer role="contentinfo" className="footer">
        <small>&copy; {new Date().getFullYear()} Little Lemon</small>
      </footer>
    </div>
  );
}
