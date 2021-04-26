import React from "react";
import loader from "../../assest/images/Loader.gif";
import style from "./Loader.module.css";

let Loader = () => {
  return (
    <span className={style.loader}>
      <img src={loader} alt="Is loading..." />
    </span>
  );
};

export default Loader;
