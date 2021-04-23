import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getAsteroidsData, toggleDistanceToTheMoon } from "../../redux/reducers/asteroids-reducer";
import { getAsteroids, getDistanceToTheMoon } from "../../redux/selectors/asteroids-selectors";
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
  const onPrevPage = () => {
    props.getAsteroidsData(props.asteroids.links.prev);
  };
  // const onAbout = () => {
  //     props
  // }
  return (
    <MainAsteroids
      asteroids={objectInArray}
      onNextPage={onNextPage}
      onPrevPage={onPrevPage}
      distanceToTheMoon={props.distanceToTheMoon}
      onDistanceChange={onDistanceChange}
    />
  );
};

let mapStateToProps = (state) => ({
  asteroids: getAsteroids(state),
  distanceToTheMoon: getDistanceToTheMoon(state),
});

export default compose(
  connect(mapStateToProps, { getAsteroidsData, toggleDistanceToTheMoon }),
  withRouter
)(MainAsterodsContainer);
