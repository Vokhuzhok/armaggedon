import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getAsteroidsData, toggleDistanceToTheMoon } from "../../redux/reducers/asteroids-reducer";
import { setDestructionAsteroid } from "../../redux/reducers/destructions-reducer";
import { getAsteroids, getDistanceToTheMoon, getIsLoading } from "../../redux/selectors/asteroids-selectors";
import MainAsteroids from "./MainAsteroids";

const MainAsterodsContainer = (props) => {
  let objectInArray = Object.values(props.asteroids.near_earth_objects);

  const onDistanceChange = (toWhatBody) => {
    if (toWhatBody === "Moon") {
      props.toggleDistanceToTheMoon(true);
    } else {
      props.toggleDistanceToTheMoon(false);
    }
  };

  const onNextPage = () => {
    props.getAsteroidsData(props.asteroids.links.next);
  };

  return (
    <MainAsteroids
      asteroids={objectInArray}
      onNextPage={onNextPage}
      distanceToTheMoon={props.distanceToTheMoon}
      onDistanceChange={onDistanceChange}
      isLoading={props.isLoading}
      setDestructionAsteroid={props.setDestructionAsteroid}
    />
  );
};

let mapStateToProps = (state) => ({
  asteroids: getAsteroids(state),
  distanceToTheMoon: getDistanceToTheMoon(state),
  isLoading: getIsLoading(state),
});

export default compose(
  connect(mapStateToProps, { getAsteroidsData, toggleDistanceToTheMoon, setDestructionAsteroid }),
  withRouter
)(MainAsterodsContainer);
