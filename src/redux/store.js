import { applyMiddleware, combineReducers, createStore } from "redux";
import asteroidsReducer from "./reducers/asteroids-reducer";
import destructionsReducer from "./reducers/destructions-reducer";
import thunkMiddleware from "redux-thunk";
import aboutReducer from "./reducers/about-reducer";

let reducers = combineReducers({
    asteroidsData: asteroidsReducer,
    destructionsData: destructionsReducer,
    aboutAsteroid: aboutReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;