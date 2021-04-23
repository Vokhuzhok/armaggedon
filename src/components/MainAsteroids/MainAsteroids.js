import React, { useEffect, useState } from "react";
import { calculateEndOfScroll } from "../../utils/calculateEndOfScroll";
import MainAsteroid from "./MainAsteroid";

const MainAsteroids = (props) => {
  let [filterByHazard, setFilterByHazard] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", scrolling)
      return () => window.removeEventListener("scroll", scrolling);
  })

  const onChangeFilter = (e) => {
    e.target.checked ? setFilterByHazard(true) : setFilterByHazard(false);
  }

  let asteroids = props.asteroids

  if (filterByHazard === true) {
    asteroids = [props.asteroids[0].filter((a)=>{return a.is_potentially_hazardous_asteroid === true})]
  }

  const scrolling = () => {
    if (calculateEndOfScroll() === 0){
        props.onNextPage()
    }
  }

  return (
    <div>
      <div>
        <div>
          <input type='checkbox' id='hazard' onChange={onChangeFilter} />
          Показать только опасные
        </div>
        <div>
          Расстояние{" "}
          <button onClick={() => props.onDistanceChange("km")}>
            в километрах
          </button>
          ,{" "}
          <button onClick={() => props.onDistanceChange("Moon")}>
            в расстояния до луны
          </button>
        </div>
      </div>
      <div>
        <MainAsteroid
          onNextPage = {props.onNextPage}
          asteroids={asteroids}
          distanceToTheMoon={props.distanceToTheMoon}
        />
      </div>
    </div>
  );
};

export default MainAsteroids;
