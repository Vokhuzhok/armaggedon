import React from "react";
import { dateTranslation } from "../../utils/dateTranslation";
import { mutateNameOfAsteroids } from "../../utils/mutateNameOfAsteroids";
import Loader from "../common/Loader";

const MainAsteroid = (props) => {
  console.log(props.asteroids);
  if (props.asteroids[0].length === 0){
    props.onNextPage()
    return <Loader/>
  } else {
  return props.asteroids[0].map((a) => (
    <div key={a.id}>
        <p>Name: {mutateNameOfAsteroids(a.name)} </p>
      <p>
        Оценка опасности: 
        {a.is_potentially_hazardous_asteroid ? " опасен" : " не опасен"}
      </p>
      <p>
        Расстояние: 
        {props.distanceToTheMoon
          ? ` ${Math.round(a.close_approach_data[0].miss_distance.lunar)}`
          : ` ${Math.round(
              a.close_approach_data[0].miss_distance.kilometers
            )} км`}
      </p>
      <p>Размер: {`${Math.round(a.estimated_diameter.meters.estimated_diameter_max)} м`}</p>
      <p>Дата: {dateTranslation(a.close_approach_data[0].close_approach_date)}</p>
    </div>
  ));}
};

export default MainAsteroid;
