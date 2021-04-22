import {asteroidsAPI} from "../../api/api"

const SET_ASTEROIDS_DATA = "SET_ASTEROIDS_DATA";
const SET_IS_LOADING = "SET_IS_LOADING";
const SET_INITIAL = "SET_INITIAL";

let initialState = {
    asteroids: [],
    isLoading: false,
    initial: false,
  };

  const asteroidsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ASTEROIDS_DATA:
            return {
                ...state,
                asteroids: action.asteroids
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_INITIAL:
            return {
                ...state,
                initial: action.initial
            }
        default:
            return state
    }
  }

  export const setAsteroidsData = (asteroids) => ({ type: SET_ASTEROIDS_DATA, asteroids });
  export const toggleIsLoading = (isLoading) => ({type:SET_IS_LOADING, isLoading})``
  export const toggleInitial = (initial) => ({type:SET_INITIAL, initial})

  export const getFirstAsteroids = () => {
    return async (dispatch) => {
      console.log("yes")
      let data = await asteroidsAPI.getFirstAsteroids();
      dispatch(setAsteroidsData(data));
      dispatch(toggleInitial(true));
    };
  };


  export default asteroidsReducer;