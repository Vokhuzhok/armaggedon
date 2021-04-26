import { dateTranslation } from "../../utils/dateTranslation";
import { mutateNameOfAsteroids } from "../../utils/mutateNameOfAsteroids";
import style from "./DestructionAsteroids.module.css";

const DestructionAsterods = (props) => {
  if (props.destructions.length === 0) {
    return (
      <div className={style.main}>Не добавлено астероидов для уничтожения</div>
    );
  } else {
    return (
      <div className={style.main}>
        <button onClick={props.onOrder}>Заказать уничтожение</button>
        {props.destructions.map((a, indx) => {
          return (
            <div key={indx}>
              <table className={style.table}>
                <thead>
                  <tr>
                    <th>Имя</th>
                    <th>Дата</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{mutateNameOfAsteroids(a[0].name)}</td>
                    <td>
                      {dateTranslation(
                        a[0].close_approach_data[0].close_approach_date
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
};

export default DestructionAsterods;
