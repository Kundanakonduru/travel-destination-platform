// src/components/About.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState({});

  const toggle = (t) => setOpen((p) => ({ ...p, [t]: !p[t] }));

  const planTrip = (place) =>
    navigate(`/plan-a-trip/${place.name}`, { state: { place } });

  const categories = [
    {
      title: "Mountains & Hill Stations",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/fb/c0/6e/caption.jpg?w=1200",
      places: [
        {
          name: "Ooty",
          location: "Tamil Nadu",
          rating: 4.6,
          budget: "₹7,500",
          accommodation: "Cottages / Hotels",
          food: ["Veg & Non-Veg", "Breakfast", "Lunch", "Dinner"],
          visits: ["Doddabetta", "Ooty Lake"],
          img: "https://images.hindustantimes.com/img/2023/01/11/1600x900/mugi-jo-6qUltw7SjzM-unsplash_1669276738103_1673425680248_1673425680248.jpg",
        },
        {
          name: "Manali",
          location: "Himachhal Pradesh",
          rating: 4.5,
          budget: "₹8,000",
          accommodation: "Resorts / Homestays",
          food: ["Veg & Non-Veg", "Breakfast", "Lunch", "Dinner"],
          visits: ["Rohtang Pass", "Solang Valley"],
          img: "https://i.pinimg.com/originals/84/ed/16/84ed165239f3e217d6ffb72a266d15a4.jpg",
        },
        {
          name: "Shimla",
          location: "Himachal Pradesh",
          rating: 4.4,
          budget: "₹6,500",
          accommodation: "Hotels / Resorts",
          food: ["Veg & Non-Veg", "Local Dishes"],
          visits: ["Mall Road", "Kufri"],
          img: "https://www.clubmahindra.com/blog/media/section_images/shuttersto-026b0fa609daf35.jpg",
        },
      ],
    },

    // Beaches
    {
      title: "Beaches",
      img: "https://tse4.mm.bing.net/th?id=OIP.APVT4FubNyHcRGSielOI6wHaE8&pid=Api&P=0",
      places: [
        {
          name: "Goa",
          location: "India",
          rating: 4.7,
          budget: "₹10,000",
          accommodation: "Beach Resorts",
          food: ["Seafood", "Veg & Non-Veg"],
          visits: ["Baga Beach", "Fort Aguada"],
          img: "https://media.cntraveller.in/wp-content/uploads/2016/10/arambol.jpg",
        },
        {
          name: "Maldives",
          location: "Indian Ocean",
          rating: 4.9,
          budget: "₹50,000",
          accommodation: "Water Villas",
          food: ["Seafood", "International Cuisine"],
          visits: ["Male Atoll", "Snorkeling"],
          img: "https://tse2.mm.bing.net/th/id/OIP.KDWSRiTZEzhj3Iqr3VbeXwHaE8?pid=Api&P=0&h=180",
        },
      ],
    },

    // Spiritual
    {
      title: "Spiritual Destinations",
      img: "https://www.authenticindiatours.com/app/uploads/2024/03/Hampi-940x585-c-default.jpg",
      places: [
        {
          name: "Varanasi",
          location: "Uttar Pradesh",
          rating: 4.6,
          budget: "₹6,000",
          accommodation: "Guest Houses",
          food: ["Veg", "Street Food"],
          visits: ["Kashi Vishwanath", "Ganga Aarti"],
          img: "https://wallpaperaccess.com/full/2714472.jpg",
        },
        {
          name: "Golden Temple",
          location: "Amritsar, Punjab",
          rating: 4.9,
          budget: "₹7,500",
          accommodation: "Hotels",
          food: ["Langar", "Veg"],
          visits: ["Harmandir Sahib", "Jallianwala Bagh"],
          img: "http://4.bp.blogspot.com/-Bmk8P2djETc/UdLS3HSxS4I/AAAAAAAAATE/fGNpRFvXa8Y/s1024/Golden_Temple_Nightview.jpg",
        },
      ],
    },

    // Adventure
    {
      title: "Adventures",
      img: "https://tse3.mm.bing.net/th?id=OIP.dzwfKbd8ALreqSap4_MLiQHaE7&pid=Api&P=0",
      places: [
        {
          name: "Ladakh",
          location: "India",
          rating: 4.8,
          budget: "₹20,000",
          accommodation: "Camps / Guesthouses",
          food: ["Veg & Non-Veg"],
          visits: ["Pangong Lake", "Leh Palace"],
          img: "https://tse2.mm.bing.net/th/id/OIP.YyCuA1DYYqd6_lHW7uV4lgHaE7?pid=Api&P=0&h=180",
        },
        {
          name: "Rishikesh",
          location: "India",
          rating: 4.7,
          budget: "₹12,000",
          accommodation: "Guest Houses",
          food: ["Veg"],
          visits: ["River Rafting", "Laxman Jhula"],
          img: "https://tse1.mm.bing.net/th/id/OIP.8iV9okQnAaujk0nrESjMKgHaE8?pid=Api&P=0&h=180",
        },
      ],
    },
  ];

  return (
    <div className="container my-5">
      {/* Intro */}
      <section className="mb-5">
        <h2 style={{ color: "blueviolet" }}>
          <u>1. Introduction to the Website</u>
        </h2>
        <p className="ms-5">
          <i>
            <span style={{ fontSize: 80 }}>W</span>elcome to <b>K-Explore</b>,
            your guide to the world’s most beautiful and exciting destinations!
          </i>
        </p>
        <p style={{ textAlign: "justify", fontSize: 20, lineHeight: "1.8" }}>
          We help you discover snowy mountains, beaches, historic cities,
          peaceful villages, adventures and more—guiding you every step of the
          way.
        </p>
      </section>

      {/* Categories */}
      {categories.map((cat) => (
        <div key={cat.title} className="mb-5">
          <div className="d-flex align-items-center mb-3">
            <img
              src={cat.img}
              alt={cat.title}
              style={{ width: 320, height: 320, borderRadius: 8 }}
            />
            <div className="ms-4">
              <h2>{cat.title}</h2>
              <button
                className="btn btn-success mt-2"
                onClick={() => toggle(cat.title)}
              >
                {open[cat.title] ? "Hide ▲" : "Explore ▼"}
              </button>
            </div>
          </div>

          {open[cat.title] && (
            <div className="row">
              {cat.places.map((p) => (
                <div key={p.name} className="col-md-4 mb-4">
                  <div className="card h-100 shadow d-flex flex-column">
                    <img
                      src={p.img}
                      className="card-img-top"
                      alt={p.name}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{p.name}</h5>
                      <p>Rating: {p.rating} ⭐</p>
                      <p>Budget: {p.budget}</p>

                      <details className="mb-3">
                        <summary>Details</summary>

                        <ol className="mt-2 mb-0 ps-3">
                          <li><b>Location:</b> {p.location}</li>
                          <li>
                            <b>Food:</b>
                            <ul className="mb-0">
                              {p.food.map((f, i) => (
                                <li key={i}>{f}</li>
                              ))}
                            </ul>
                          </li>
                          <li><b>Accommodation:</b> {p.accommodation}</li>
                          <li><b>Places to visit:</b> {p.visits.join(", ")}</li>
                        </ol>
                      </details>

                      <button
                        className="btn btn-primary mt-auto"
                        onClick={() => planTrip(p)}
                      >
                        Plan Trip
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default About;
