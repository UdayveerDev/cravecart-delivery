import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Crave it? Get it delivered by CraveCart!</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes. Whether you are craving a quick bite or a full feast, CraveCart brings the finest culinary experiences straight to your door, fast and fresh.
        </p>
        <button>Explore Menu</button>
      </div>
    </div>
  );
};

export default Header;
