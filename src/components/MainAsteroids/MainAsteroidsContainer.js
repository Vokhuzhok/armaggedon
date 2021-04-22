import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { getAsteroids } from "../../redux/selectors/asteroids-selectors";
import MainAsteroids from "./MainAsteroids";

const MainAsterodsContainer = (props) => {
    console.log("container")
    return <MainAsteroids asteroids={props.asteroids}/>
}

let mapStateToProps = (state) => ({
    asteroids:getAsteroids(state),
})

export default compose(connect(mapStateToProps,{}), withRouter) (MainAsterodsContainer);