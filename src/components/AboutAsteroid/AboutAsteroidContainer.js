import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getAsteroidData } from "../../redux/reducers/about-reducer";
import { setDestructionAsteroid } from "../../redux/reducers/destructions-reducer";
import { getAsteroids } from "../../redux/selectors/asteroids-selectors";
import { getAboutLoading, getAsteroidAbout } from "../../redux/selectors/about-selectors";
import Loader from "../common/Loader";
import AboutAsteroid from "./AboutAsterod";

const AboutAsteroidContainer = (props) => {
  let asteroidId = props.match.params.asteroidId;
  const asteroidsArr = Object.values(props.asteroids.near_earth_objects);

  useEffect(() => {
    let arr = asteroidsArr[0].filter((a) => {
      return a.id === asteroidId;
    });
    props.getAsteroidData(arr[0].links.self);
  }, []);

  const onAddToDestroy = (e) => {
    const id = e.target.value;
    let arr = asteroidsArr[0].filter((a) => {
      return a.id === id;
    });
    props.setDestructionAsteroid(arr);
  };

  if (props.isLoading || props.asteroid.length === 0) {
    return <Loader />;
  } else {
    return (
      <AboutAsteroid
        asteroid={props.asteroid}
        onAddToDestroy={onAddToDestroy}
      />
    );
  }
};

let mapStateToProps = (state) => ({
  asteroid: getAsteroidAbout(state),
  isLoading: getAboutLoading(state),
  asteroids: getAsteroids(state),
});

export default compose(
  connect(mapStateToProps, { getAsteroidData, setDestructionAsteroid }),
  withRouter
)(AboutAsteroidContainer);
