import React, { useState } from "react";
import { useParams } from "react-router-dom";
const catalog = {
  manali: { location: "Himachal Pradesh", price: 8000 },
  darjeeling: { location: "West Bengal", price: 7000 },
  ooty: { location: "Tamil Nadu", price: 7500 },
  shimla: { location: "Himachal Pradesh", price: 7200 },
  munnar: { location: "Kerala", price: 8500 },
  coorg: { location: "Karnataka", price: 7800 },
  goa: { location: "India", price: 6000 },
  bali: { location: "Indonesia", price: 12000 },
  maldives: { location: "Maldives", price: 25000 },
  pondicherry: { location: "India", price: 5500 },
  andaman: { location: "India", price: 10000 },
  kovalam: { location: "Kerala", price: 7000 },
  varanasi: { location: "Uttar Pradesh", price: 5000 },
  "golden temple": { location: "Punjab", price: 6000 },
  mecca: { location: "Saudi Arabia", price: 20000 },
  "bodh gaya": { location: "Bihar", price: 4000 },
  tirupati: { location: "Andhra Pradesh", price: 3500 },
  haridwar: { location: "Uttarakhand", price: 4200 },
  ladakh: { location: "Jammu & Kashmir", price: 11000 },
  rishikesh: { location: "Uttarakhand", price: 5000 },
  "new zealand": { location: "New Zealand", price: 30000 },
  andes: { location: "South America", price: 28000 },
  "himachal trek": { location: "India", price: 8500 },
  auli: { location: "Uttarakhand", price: 8000 },
};

const allowed = Object.keys(catalog);

const tomorrow = new Date(Date.now() + 86400000)
  .toISOString()
  .split("T")[0];

const PlanaTrip = () => {
  const { place } = useParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    destination: place || "",
    passengers: "",
    children: "",
    date: "",
    mode: "Flight",
  });
  const [msg, setMsg] = useState({ text: "", type: "" });
  const handle = (e) =>
  setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
  e.preventDefault();
  const destKey = (form.destination || "").trim().toLowerCase();
    if (!allowed.includes(destKey)) {
      setMsg({
        text:
          " Destination not found in our catalog. Please choose a place from the Explore cards.",
        type: "error",
      });
      return;
    }

    if (!form.date || form.date < tomorrow) {
      setMsg({
        text: `❌ Please choose a travel date on or after ${tomorrow}.`,
        type: "error",
      });
      return;
    }


    const adults = Math.max(0, parseInt(form.passengers || "0", 10));
    const kids = Math.max(0, parseInt(form.children || "0", 10));

    if (adults < 1) {
      setMsg({
        text: "❌ Please enter at least 1 passenger.",
        type: "error",
      });
      return;
    }

    const price = catalog[destKey].price; 
    const kidCost = kids * 150;
    const total = adults * price + kidCost;
    const location = catalog[destKey].location;

    setMsg({
      text: 
        ` Booking Confirmed!\n\n` +
        ` Name: ${form.name}\n` +
        ` Email: ${form.email}\n` +
        ` Destination: ${form.destination}\n` +
        ` Location: ${location}\n` +
        ` Date: ${form.date}\n` +
        ` Mode: ${form.mode}\n\n` +
        ` Budget per Adult: ₹${price}\n` +
        ` Children Cost: ₹${kidCost}\n` +
        ` Final Total: ₹${total}`,
      type: "success",
    });
  };

  return (
    <div className="container my-5" style={{ maxWidth: 600 }}>
      <h2 className="mb-4">Plan a Trip</h2>

      {msg.text && (
        <div
          className={`alert ${
            msg.type === "success" ? "alert-success" : "alert-danger"
          }`}
          style={{ whiteSpace: "pre-line" }}
        >
          {msg.text}
        </div>
      )}

      <form onSubmit={submit}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name *</label>
          <input
            className="form-control"
            name="name"
            value={form.name}
            onChange={handle}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email *</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handle}
            required
          />
        </div>

        {/* Destination */}
        <div className="mb-3">
          <label className="form-label">Destination *</label>
          <input
            className="form-control"
            name="destination"
            value={form.destination}
            onChange={handle}
            placeholder="e.g. Goa"
            required
          />
        </div>

        {/* Passengers */}
        <div className="mb-3">
          <label className="form-label">No. of Passengers *</label>
          <input
            type="number"
            className="form-control"
            name="passengers"
            min="1"
            value={form.passengers}
            onChange={handle}
            required
          />
        </div>

        {/* Children */}
        <div className="mb-3">
          <label className="form-label">No. of Children (₹150 per head)</label>
          <input
            type="number"
            className="form-control"
            name="children"
            min="0"
            value={form.children}
            onChange={handle}
          />
        </div>

        {/* Date */}
        <div className="mb-3">
          <label className="form-label">Travel Date *</label>
          <input
            type="date"
            className="form-control"
            name="date"
            min={tomorrow}
            value={form.date}
            onChange={handle}
            required
          />
        </div>

        {/* Mode */}
        <div className="mb-4">
          <label className="form-label">Mode of Travel *</label>
          <select
            className="form-select"
            name="mode"
            value={form.mode}
            onChange={handle}
            required
          >
            <option>Flight</option>
            <option>Train</option>
            <option>Bus</option>
          </select>
        </div>

        <button className="btn btn-success w-100">Book Ticket</button>
      </form>
    </div>
  );
};

export default PlanaTrip;
