import { asteroidsAPI } from "../../api/api";

const SET_ASTEROID_ABOUT = "SET_ASTEROID_ABOUT";
const SET_ABOUT_LOADING = "SET_ABOUT_LOADING";

let initialState = {
    asteroid:[],
    aboutLoading: false,
}

const aboutReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_ASTEROID_ABOUT:
            return {
                ...state,
                asteroid: action.asteroid
            }
        case SET_ABOUT_LOADING:
            return {
                ...state,
                aboutLoading: action.aboutLoading
            }
        default:
            return state
    }
}

export const setAsteroidAboutData = (asteroid) => ({type:SET_ASTEROID_ABOUT, asteroid})
export const toggleAboutLoading = (aboutLoading) => ({type:SET_ABOUT_LOADING, aboutLoading})

export const getAsteroidData = (url) => {
    return async (dispatch) => {
        dispatch(toggleAboutLoading(true));
        let data = await asteroidsAPI.getAsteroidAbout(url);
        dispatch(setAsteroidAboutData(data));
        dispatch(toggleAboutLoading(false));
    }
  }

//   export const getAsteroidsData = (linkOnNextPage) => {
//     return async (dispatch) => {
//         dispatch(toggleIsLoading(true));
//         let data = await asteroidsAPI.getAsteroidsData(linkOnNextPage);
//         dispatch(setAsteroidsData(data));
//         dispatch(toggleIsLoading(false));
//     }
//   }

  export default aboutReducer;