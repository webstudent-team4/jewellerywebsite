import React from "react";
import Body2 from "./body-2/body-2";

import "../App.css";
const Body = () => {
  let width = window.innerWidth;
  return (
    <div style={{marginTop:'200px'}}>
      <body>
        <Body2 />
      </body>
    </div>
  );
};

export default Body;
