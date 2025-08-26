import React, { useState } from "react";

const initialState = {
  date: "",
  time: "",
  guests: 1,
  occasion: "Birthday",
};

export default function BookingForm() {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!formData.date) e.date = "Date is required";
    if (!formData.time) e.time = "Time is required";
    const g = Number(formData.guests);
    if (!g || g < 1 || g > 10) e.guests = "Guests must be between 1 and 10";
    return e;
  };

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setFormData((s) => ({ ...s, [name]: value }));
    if (errors[name]) {
      setErrors((e) => ({ ...e, [name]: undefined }));
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <section aria-labelledby="booking-heading">
      <h2 id="booking-heading" className="visually-hidden">Booking Form</h2>
      <form onSubmit={handleSubmit} noValidate aria-describedby="form-help">
        <fieldset>
          <legend className="legend">Reservation Details</legend>

          <div className="form-row">
            <label htmlFor="date">Choose Date<span aria-hidden="true"> *</span></label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              aria-invalid={!!errors.date}
              aria-describedby={errors.date ? "date-error" : undefined}
              required
            />
            {errors.date && <span id="date-error" role="alert" className="error">{errors.date}</span>}
          </div>

          <div className="form-row">
            <label htmlFor="time">Choose Time<span aria-hidden="true"> *</span></label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              aria-invalid={!!errors.time}
              aria-describedby={errors.time ? "time-error" : undefined}
              required
            />
            {errors.time && <span id="time-error" role="alert" className="error">{errors.time}</span>}
          </div>

          <div className="form-row">
            <label htmlFor="guests">Number of Guests<span aria-hidden="true"> *</span></label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="10"
              value={formData.guests}
              onChange={handleChange}
              aria-invalid={!!errors.guests}
              aria-describedby={errors.guests ? "guests-error" : "guests-help"}
              required
            />
            {errors.guests
              ? <span id="guests-error" role="alert" className="error">{errors.guests}</span>
              : <small id="guests-help" className="help">Allowed range: 1–10</small>
            }
          </div>

          <div className="form-row">
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Business</option>
              <option>Other</option>
            </select>
          </div>

          <button type="submit" className="btn">Book Table</button>
        </fieldset>

        <p id="form-help" className="visually-hidden">Fields marked with * are required.</p>
      </form>

      {submitted && (
        <div role="status" className="success">
          ✅ Booking successful! Date: <strong>{formData.date || "—"}</strong> at <strong>{formData.time || "—"}</strong> for <strong>{formData.guests}</strong> guest(s), occasion: <strong>{formData.occasion}</strong>.
        </div>
      )}
    </section>
  );
}
