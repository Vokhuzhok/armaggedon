import React from "react";
import { NavLink } from "react-router-dom";
import { dateTranslation } from "../../utils/dateTranslation";
import { mutateNameOfAsteroids } from "../../utils/mutateNameOfAsteroids";
import Loader from "../common/Loader";
import style from "./MainAsteroids.module.css";
import dino from "../../assest/images/Dino.svg";
import asteroid from "../../assest/images/Asteroid.svg";

const MainAsteroid = (props) => {
  if (props.asteroids[0].length === 0) {
    props.onNextPage();
    return <Loader />;
  } else {
    return (
      <div className={style.main}>
        {props.asteroids[0].map((a, indx) => (
          <div
            key={indx}
            className={`${
              !a.is_potentially_hazardous_asteroid
                ? style.mainNoHazard
                : style.mainHazard
            }`}
          >
            <div className={style.images}>
              <div className={style.dino}>
              <img src={dino} alt='dino'  />
              </div>
              <div className={style.asteroid}>
              <img src={asteroid} alt='asteroid'   
              width={a.estimated_diameter.meters.estimated_diameter_max <50?40:a.estimated_diameter.meters.estimated_diameter_max<300?100:200}
                />
              </div>
            </div>
            <div className={style.mainInfo}>
              <NavLink to={"about/" + a.id} className={style.name}>
                {mutateNameOfAsteroids(a.name)}
              </NavLink>
              <table>
                <tbody>
                  <tr>
                    <td>Расстояние:</td>
                    <td className={style.dotes}></td>
                    <td>
                      {props.distanceToTheMoon
                        ? ` ${Math.round(
                            a.close_approach_data[0].miss_distance.lunar
                          )}`
                        : ` ${Math.round(
                            a.close_approach_data[0].miss_distance.kilometers
                          )} км`}
                    </td>
                  </tr>
                  <tr>
                    <td>Размер:</td>
                    <td className={style.dotes}></td>
                    <td>
                      {`${Math.round(
                        a.estimated_diameter.meters.estimated_diameter_max
                      )} м`}
                    </td>
                  </tr>
                  <tr>
                    <td>Дата:</td>
                    <td className={style.dotes}></td>
                    <td>
                      {dateTranslation(
                        a.close_approach_data[0].close_approach_date
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className={style.hazardBlock}>
              <p className={style.hazard}>
                Оценка:
              </p>
              <p className={style.hazardText}>
                {a.is_potentially_hazardous_asteroid ? " опасен" : " не опасен"}
              </p>
              <button value={a.id} onClick={props.onAddToDestroy} className={style.buttonHazard} >
                На уничтожение
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default MainAsteroid;
