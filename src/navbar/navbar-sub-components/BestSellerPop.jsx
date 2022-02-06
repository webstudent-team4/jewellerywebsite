import React from "react";

function BestSellerPop() {
  return (
    <div className="NavPopWrapper">
      <div className="NavPopChildren">
        <h1>BY CATEGORY</h1>
        <hr />
        <h1>Rings</h1>
        <h1>Earrings</h1>
        <h1>Pendants</h1>
        <h1>Nose Pins</h1>
      </div>
      <div className="NavPopChildren">
        <h1>POPULAR RING TYPES</h1>
        <hr />
        <h1>Daily Wear</h1>
        <h1>Engagement</h1>
        <h1>Solitaire</h1>
        <h1>Cocktail</h1>
        <h1>Office Wear</h1>
        <h1>Men's</h1>
        <h1>View All</h1>
      </div>

      <div className="NavPopImageWrapper">
        <img
          className="NavPopImage"
          src="https://www.pcjeweller.com/public/uploads/exim//pcjw/category/pendants.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default BestSellerPop;
