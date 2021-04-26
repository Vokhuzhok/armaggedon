import { dateTranslation } from "../../utils/dateTranslation";
import { mutateNameOfAsteroids } from "../../utils/mutateNameOfAsteroids";
import { mutateTime } from "../../utils/mutateTime";
import { orbitBodyTranslate } from "../../utils/orbitBodyTranslate";
import Loader from "../common/Loader";
import style from "./About.module.css";

const AboutAsteroid = (props) => {
  if (props.asteroid.length === 0) {
    return <Loader />;
  } else {
    return (
      <div className={style.main}>
        <button value={props.asteroid.id} onClick={props.onAddToDestroy}>
          Уничтожить
        </button>
        <p>Name: {mutateNameOfAsteroids(props.asteroid.name)}</p>
        <p>
          Размер max:{" "}
          {props.asteroid.estimated_diameter.meters.estimated_diameter_max} м.
        </p>
        <p>
          Размер min:{" "}
          {props.asteroid.estimated_diameter.meters.estimated_diameter_min} м.
        </p>
        <p>
          Оценка опасности:{" "}
          {props.asteroid.is_potentially_hazardous_asteroid
            ? "Опасен"
            : "Не опасен"}
        </p>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Дата подлёта</th>
              <th>Время</th>
              <th>Расстояние до Земли, км</th>
              <th>Скорость, км/с</th>
              <th>Орбита вокруг</th>
            </tr>
          </thead>
          <tbody>
            {props.asteroid.close_approach_data.map((a, indx) => {
              return (
                <tr key={indx}>
                  <td>{dateTranslation(a.close_approach_date)}</td>
                  <td>{mutateTime(a.close_approach_date_full)}</td>
                  <td>{Math.round(a.miss_distance.kilometers)}</td>
                  <td>
                    {Math.round(a.relative_velocity.kilometers_per_second)}
                  </td>
                  <td>{orbitBodyTranslate(a.orbiting_body)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default AboutAsteroid;
