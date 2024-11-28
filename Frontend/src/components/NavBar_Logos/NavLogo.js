import React, { useRef } from "react";
import { links } from "../../assets/Icons-Links";
import "./NavLogo_Styles.css";

function NavLogo({ selectedFilter, setSelectedFilter }) {
  const scrollRef = useRef(null);

  
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -600, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 600, behavior: "smooth" });
    }
  };

  return (
    <div className="filter-container">
      {/* Left Scroll Button */}
      <button className="scroll-button left" onClick={() => scroll("left")}>
        &lt;
      </button>

      {/* Filter Links */}
      <div className="filter-div" ref={scrollRef}>
        {links.map((item, i) => (
          <div
            key={i}
            className={`links-box ${i === selectedFilter && "selected-box"}`}
            onClick={() => {
              setSelectedFilter(i);
            }}
          >
            <img src={item.imgSrc} className="links-img" alt={item.label} />
            <p className={`links-label ${i === selectedFilter && "selected-label"}`}>
              {item.label}
            </p>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button className="scroll-button right" onClick={() => scroll("right")}>
        &gt;
      </button>
    </div>
  );
}

export default NavLogo;
