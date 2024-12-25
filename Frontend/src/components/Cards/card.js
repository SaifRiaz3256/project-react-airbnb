import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Cards_Styling.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { AppContext } from "../../Context/AppContext";

// Card Component
function Card({ card }) {
  return (
    <Link to={`/product/${card.id}`} className="card-box">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        mousewheel={true}
        cssMode={true}
        pagination
        modules={[Pagination, Navigation]}
        className="swiper-container"
      >
        {card.imgSrc.map((src, i) => (
          <SwiperSlide key={i}>
            <img src={src} className="card-img" alt={`Image ${i + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="card-info-flex">
        <h3 className="card-title">{card.title}</h3>
        <div className="card-rating">
          <StarRateRoundedIcon />
          <p>{card.rating}</p>
        </div>
      </div>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.desc}</p>
      <p style={{ margin: 0, color: "var(--font-grey)" }}>{card.date}</p>
      <p style={{ margin: "0.2rem", fontSize: "1rem", color: "var(--black" }}>
        <span style={{ fontWeight: "600" }}>₹{card.price}</span> night
      </p>
    </Link>
  );
}

// Multiple Cards Component
function Multiple_Cards() {
  const { selectedCategory } = useContext(AppContext);

  if (!selectedCategory) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cards-flex">
      {selectedCategory.item.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
}

export default Multiple_Cards;
