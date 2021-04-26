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
import Header from "./components/Header/Header";
import style from "./components/Header/Header.module.css";

function App(props) {
  if (props.initial === false) {
    props.getFirstAsteroids();
    return <Loader />;
  }
  return (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <Route exact path='/' render={() => <MainAsterodsContainer />} />
        <Route
          path='/destructions'
          render={() => <DestructionAsteroidsContainer />}
        />
        <Route
          path='/about/:asteroidId'
          render={() => <AboutAsteroidContainer />}
        />
      </div>
      <footer className={style.footer}>2021 © Все права и планета защищены.</footer>
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
