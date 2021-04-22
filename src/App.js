import "./App.css";
import { Route, withRouter } from "react-router-dom";
import MainAsterodsContainer from "./components/MainAsteroids/MainAsteroidsContainer";
import DestructionAsteroidsContainer from "./components/DestructionAsterods/DestructionAsteroidsContainer";
import AboutAsteroidContainer from "./components/AboutAsteroid/AboutAsteroidContainer";
import { compose } from "redux";
import { connect } from "react-redux";
import { getInitial } from "./redux/selectors/asteroids-selectors";
import { getFirstAsteroids } from "./redux/reducers/asteroids-reducer";
import Loader from "./components/common/Loader";

function App(props) {
  if (props.initial === false) {
    console.log("loader")
    props.getFirstAsteroids();
    return <Loader />;
  } 
    return (
      <div>
        <Route 
          path='/' 
          render={() => <MainAsterodsContainer />} />
        <Route
          path='/destructions'
          render={() => <DestructionAsteroidsContainer />}
        />
        <Route
          path='/about/:asterodId?'
          render={() => <AboutAsteroidContainer />}
        />
      </div>
    );
  
}

let mapStateToProps = (state) => ({
  initial: getInitial(state),
});

export default compose(
  connect(mapStateToProps, { getFirstAsteroids }),
  withRouter
)(App);
