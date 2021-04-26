import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { calculateEndOfScroll } from "../../utils/calculateEndOfScroll";
import Loader from "../common/Loader";
import MainAsteroid from "./MainAsteroid";
import style from "./MainAsteroids.module.css";

const MainAsteroids = (props) => {
  let [filterByHazard, setFilterByHazard] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrolling);
    return () => window.removeEventListener("scroll", scrolling);
  });

  const onChangeFilter = (e) => {
    e.target.checked ? setFilterByHazard(true) : setFilterByHazard(false);
  };

  const onAddToDestroy = (e) => {
    const id = e.target.value
        let arr=asteroids[0].filter((a) => {
            return a.id === id
        })
        props.setDestructionAsteroid(arr);
  }

  let asteroids = props.asteroids;

  if (filterByHazard === true) {
    asteroids = [
      props.asteroids[0].filter((a) => {
        return a.is_potentially_hazardous_asteroid === true;
      }),
    ];
  }

  const scrolling = () => {
    if (calculateEndOfScroll() === 0) {
      props.onNextPage();
      document.documentElement.scrollTop = 0;
    }
  };

  return (
    <div>
      <div className={style.head}>
        <div className={style.input}>
          <input type='checkbox' id='hazard' onChange={onChangeFilter} />
          Показать только опасные
        </div>
        <div className={style.button}>
          Расстояние{" "}
          <button onClick={() => props.onDistanceChange("km")} className={`${props.distanceToTheMoon?style.notUse:style.use}`}>
            в километрах
          </button>
          ,{" "}
          <button onClick={() => props.onDistanceChange("Moon")} className={`${!props.distanceToTheMoon?style.notUse:style.use}`}>
            в дистанциях до луны
          </button>
        </div>
      </div>
      <div>
        {props.isLoading ? (
          <Loader />
        ) : (
          <MainAsteroid
            onNextPage={props.onNextPage}
            asteroids={asteroids}
            distanceToTheMoon={props.distanceToTheMoon}
            onAddToDestroy={onAddToDestroy}
          />
        )}
      </div>
    </div>
  );
};

export default withRouter(MainAsteroids);
