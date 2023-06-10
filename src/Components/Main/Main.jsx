import React, { useEffect } from "react";
import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import img1 from "../../Assets/img 1.jpg";
import img2 from "../../Assets/img 2.jpg";
import img3 from "../../Assets/img 3.jpg";
import img4 from "../../Assets/img 4.jpg";
import img5 from "../../Assets/img 5.jpg";
import img6 from "../../Assets/img 6.jpg";
import img7 from "../../Assets/img 7.jpg";
import img8 from "../../Assets/img 8.jpg";
import img9 from "../../Assets/img 9.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Bora Bora is a stunning tropical paradise with turquoise waters, white-sand beaches, and lush greenery. It's famous for its overwater bungalows and vibrant coral reefs, making it a dream destination for beach lovers and snorkeling enthusiasts.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Machu Picchu is a remarkable ancient Incan citadel located in the Andes Mountains of Peru. Its stunning architecture and panoramic views make it a must-visit destination, attracting visitors with its mystique and historical significance.",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The Great Barrier Reef is the world's largest coral reef system, located off the coast of Queensland, Australia. It is renowned for its stunning marine biodiversity, vibrant coral formations, and is a popular destination for snorkeling and diving enthusiasts.",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "Cappadocia is a mesmerizing region in central Turkey known for its surreal landscapes, characterized by fairy-tale-like rock formations and ancient cave dwellings. It is a popular destination for hot air balloon rides, offering breathtaking views of the unique geological formations.",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "Guanajuato is a vibrant colonial city in central Mexico, renowned for its colorful architecture, cultural festivities, and historic landmarks. With its charming streets and rich artistic heritage, Guanajuato offers a captivating experience for visitors.",
  },

  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "Cinque Terre is a collection of five colorful coastal villages in Italy's Italian Riviera region. With its picturesque landscapes, charming streets, and stunning views of the Ligurian Sea, it is a popular destination for travelers seeking natural beauty and seaside charm.",
  },

  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "Angkor Wat is a magnificent temple complex situated in Siem Reap, Cambodia. Built in the 12th century, it is the largest religious monument in the world and a UNESCO World Heritage Site. Known for its intricate carvings, grand scale, and architectural brilliance, Angkor Wat is a captivating testament to the Khmer Empire's rich history and cultural significance.",
  },

  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      "The Taj Mahal is an iconic white marble mausoleum located in Agra, India. It was built by the Mughal emperor Shah Jahan in the 17th century as a tribute to his beloved wife, Mumtaz Mahal. Taj Mahal is renowned for its exquisite architectural beauty and symbolizes eternal love and devotion.",
  },

  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Bali is a breathtaking Indonesian island with stunning beaches, lush landscapes, and a rich cultural heritage, attracting visitors worldwide. Its tropical climate and vibrant traditions create a captivating and unforgettable experience for travelers.",
  },
];

const Main = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="main container">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
