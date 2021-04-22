import React from "react";
import loader from "../../assest/images/Loader.gif";

let Loader = () => {
  return (
    <span>
      <img src={loader} alt="Is loading..." />
    </span>
  );
};

export default Loader;
