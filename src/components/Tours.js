import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Tours = () => {
  const navigate = useNavigate();
  const sectionStyle = {
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "100px",
  };
  const imageStyle = { width: 300, height: 300, marginRight: 40 };
  const textStyle = { textAlign: "center" };
  const paragraphStyle = { fontSize: 20, lineHeight: "30px", letterSpacing: 1 };
  const [selectedTrip, setSelectedTrip] = useState(null); 
  const [openDetails, setOpenDetails] = useState(null); 
  const handlePlanClick = (name) =>
    setSelectedTrip((prev) => (prev === name ? null : name));
 const renderTripOptions = (name) =>
    selectedTrip === name && (
      <div className="btn-group mt-2">
        {["Bus", "Train", "Flight"].map((mode) => (
          <button
            key={mode}
            className="btn btn-outline-primary"
            onClick={() => {
              alert(`${mode} selected for ${name}`);
              navigate(
                `/plan-a-trip/${name.toLowerCase().replace(/\s+/g, "-")}`
              );
            }}
          >
            {mode}
          </button>
        ))}
      </div>
    );
  const Destination = ({
    name,
    img,
    text,
    activities,
    bestTime,
    location,
    food,
    stay,
    visits,
  }) => {
    const isSpecial = name === "Himalayas" || name === "Vatican City";

    return (
      <div style={sectionStyle}>
        {/* ---------- IMAGE + BUTTONS ---------- */}
        <div>
          <img src={img} alt={name} style={imageStyle} />

          {!isSpecial && (
            <>
              <button
                className="btn btn-link p-0"
                onClick={() =>
                  setOpenDetails(openDetails === name ? null : name)
                }
              >
                {openDetails === name ? "Hide ▲ Details" : "Details ▼"}
              </button>

              {openDetails === name && (
                <div className="border rounded p-2 mb-2" style={{ width: 280 }}>
                  <p className="mb-1">
                    <b>Location:</b> {location}
                  </p>
                  <p className="mb-1">
                    <b>Food provided:</b> {food}
                  </p>
                  <p className="mb-1">
                    <b>Accommodation:</b> {stay}
                  </p>
                  <p className="mb-1">
                    <b>Places to visit:</b> {visits}
                  </p>
                  <p className="mb-0 text-success">
                    <b>Discount:</b> 15% on 2 adults + free for children
                  </p>
                </div>
              )}
            </>
          )}

          {/* Plan trip & transport */}
          <button className="btn btn-primary" onClick={() => handlePlanClick(name)}>
            Plan Your Trip
          </button>
          {renderTripOptions(name)}
        </div>

        {/* ---------- TEXT ---------- */}
        <div style={textStyle}>
          <p style={paragraphStyle}>{text}</p>
          <p>
            <b>Tour Activities:</b> {activities}
          </p>
          <p>
            <b>Best time to Visit:</b> {bestTime}
          </p>
          <p>
            📍 <b>Location:</b> {location}
          </p>

          {isSpecial && (
            <>
              <button
                className="btn btn-link p-0"
                onClick={() =>
                  setOpenDetails(openDetails === name ? null : name)
                }
              >
                {openDetails === name ? "Hide ▲ Details" : "Details ▼"}
              </button>

              {openDetails === name && (
                <div className="border rounded p-2 mt-2">
                  <p className="mb-1">
                    <b>Location:</b> {location}
                  </p>
                  <p className="mb-1">
                    <b>Food provided:</b> {food}
                  </p>
                  <p className="mb-1">
                    <b>Accommodation:</b> {stay}
                  </p>
                  <p className="mb-1">
                    <b>Places to visit:</b> {visits}
                  </p>
                  <p className="mb-0 text-success">
                    <b>Discount:</b> 15% on 2 adults + free for children
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  /* ----------  PAGE ---------- */
  return (
    <div className="container mt-4">
      <h1 style={{ textAlign: "center", color: "blueviolet" }}>
        <u>Popular Destinations & Details</u>
      </h1>

      {/* ================== Mountains ================== */}
      <h2>
        <i>
          <u>Mountains & Hill Stations</u>
        </i>
      </h2>

      <h3 style={{ color: "blueviolet" }}>
        <i>
          <u>Himalayas</u>
        </i>
      </h3>
      <Destination
        name="Himalayas"
        img="https://tse3.mm.bing.net/th?id=OIP.LV1xteIjF1zfucZBgxoVgAHaE8&pid=Api&P=0&h=180"
        text="The Himalayas offer breathtaking landscapes, snow-capped peaks, spiritual retreats."
        activities="Trekking, Camping, River Rafting"
        bestTime="April-June & Sept-Nov"
        location="Shimla, Himachal Pradesh"
        food="Veg & Non-Veg"
        stay="Resorts, Homestays"
        visits="Manali, Leh, Darjeeling"
      />

      {/* Zermatt */}
      <h3 style={{ color: "blueviolet" }}>
        <u>Zermatt</u>
      </h3>
      <Destination
        name="Zermatt"
        img="https://www.myswitzerland.com/-/media/st/gadmin/images/village/winter/dorf_zermatt_winter_28413.jpg"
        text="Zermatt is a stunning alpine village at the base of the Matterhorn."
        activities="Climbing, Hiking, Skiing"
        bestTime="Dec-Mar & Jun-Sep"
        location="Valais, Switzerland"
        food="Swiss cuisine"
        stay="Chalets, Hotels"
        visits="Matterhorn, Gornergrat"
      />

      <hr />

      {/* ================== Beaches ================== */}
      <h2>
        <u>Beaches</u>
      </h2>

      <Destination
        name="White Beach"
        img="https://tse3.mm.bing.net/th?id=OIP.dd4tTamGR97G-M-kkdq1eQHaEK&pid=Api&P=0&h=180"
        text="Boracay's White Beach is famous for crystal-clear waters."
        activities="Snorkeling, Parasailing"
        bestTime="Nov-May"
        location="Boracay, Philippines"
        food="Seafood"
        stay="Beach Resorts"
        visits="Diniwid Beach, Puka Beach"
      />

      <Destination
        name="Baga Beach"
        img="https://tse4.mm.bing.net/th?id=OIP.I51tmZOcz4GJ4ht8NKCWGwHaE7&pid=Api&P=0&h=180"
        text="Baga Beach is known for nightlife & water sports."
        activities="Jet Skiing, Beach Parties"
        bestTime="Nov-Feb"
        location="Goa, India"
        food="Veg & Seafood"
        stay="Resorts"
        visits="Calangute, Candolim"
      />

      <hr />

      {/* ================== Spiritual ================== */}
      <h2>
        <u>Spiritual Destinations</u>
      </h2>

      <Destination
        name="Varanasi"
        img="https://tse2.mm.bing.net/th?id=OIP.8YFMcotGeXHDAfOgTRKCjQHaE7&pid=Api&P=0&h=180"
        text="One of the oldest spiritual cities."
        activities="Ganga Aarti, Sarnath Visit"
        bestTime="Oct-Mar"
        location="Uttar Pradesh, India"
        food="Pure Veg"
        stay="Ashrams, Hotels"
        visits="Kashi Vishwanath, Ghats"
      />

      <Destination
        name="Vatican City"
        img="https://tse4.mm.bing.net/th?id=OIP.Skk8K2-i5rqjlpOrREQ9YQHaEo&pid=Api&P=0&h=180"
        text="Home to St. Peter's Basilica & Sistine Chapel."
        activities="Museums, Papal Audience"
        bestTime="Apr-Jun & Sep-Oct"
        location="Rome, Italy"
        food="Italian"
        stay="Boutique Hotels"
        visits="Sistine Chapel"
      />

      <hr />

      {/* ================== Adventure ================== */}
      <h2>
        <u>Adventures</u>
      </h2>

      <Destination
        name="Queenstown"
        img="https://up.yimg.com/ib/th?asid=432345564362608062&id=OAUMA.E5AE72B8DB5560E4A1F2ED245DE88590_22ADD91705010302&pid=21.1&o=5&w=442&h=231&c=1&rs=1&qlt=95"
        text="Adventure capital of the world."
        activities="Bungee Jumping, Skydiving"
        bestTime="Dec-Feb & Jun-Aug"
        location="South Island, NZ"
        food="Global"
        stay="Lodges"
        visits="Milford Sound"
      />

      <Destination
        name="Iceland"
        img="https://tse4.mm.bing.net/th?id=OIP.YC5ids0xhzembNX2Q12lHAHaEK&pid=Api&P=0&h=180"
        text="Land of volcanoes and glaciers."
        activities="Glacier Hike, Waterfalls"
        bestTime="Jun-Aug & Feb-Mar"
        location="North Atlantic"
        food="Local Icelandic"
        stay="Cabins"
        visits="Blue Lagoon, Golden Circle"
      />
    </div>
  );
};

export default Tours;
