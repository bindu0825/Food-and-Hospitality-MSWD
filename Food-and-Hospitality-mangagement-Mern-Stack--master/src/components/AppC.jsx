import React, { useState, useEffect } from "react";

const initialBookingState = { id: null, name: "", email: "", details: "" };

function AppC() {
  const [bookings, setBookings] = useState([]);
  const [currentBooking, setCurrentBooking] = useState(initialBookingState);
  const [editing, setEditing] = useState(false);

  const apiUrl = "http://localhost:3000/bookings";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setBookings(data));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentBooking({ ...currentBooking, [name]: value });
  };

  const saveBooking = (event) => {
    event.preventDefault();

    const method = editing ? "PUT" : "POST";

    fetch(apiUrl + (editing ? `/${currentBooking.id}` : ""), {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(currentBooking),
    })
      .then((response) => response.json())
      .then((data) => {
        setEditing(false);
        setCurrentBooking(initialBookingState);
        setBookings([...bookings, data]);
      });
  };

  const deleteBooking = (id) => {
    fetch(apiUrl + `/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setBookings(bookings.filter((booking) => booking.id !== id));
      });
  };

  const editBooking = (booking) => {
    setEditing(true);
    setCurrentBooking({
      id: booking.id,
      name: booking.name,
      email: booking.email,
      details: booking.details,
    });
  };

  return (
    <div className="container">
      <h1>Hotel Bookings</h1>
      <div className="row">
        <div className="col-md-4">
          <h2>{editing ? "Edit" : "Add"} Booking</h2>
          <form onSubmit={saveBooking}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={currentBooking.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={currentBooking.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="details">Booking Details</label>
              <textarea
                className="form-control"
                id="details"
                name="details"
                rows="3"
                value={currentBooking.details}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              {editing ? "Update" : "Save"}
            </button>
          </form>
        </div>
        <div className="col-md-8">
          <h2>View Bookings</h2>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                </tr>
                </thead>
                </table>
                </div>
            </div>
      </div>
  )};
  export default AppC;