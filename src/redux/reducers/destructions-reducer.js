const SET_DESTRUCTION_ASTEROID ="SET_DESTRUCTION_ASTEROID";

let initialState = {
    destructions: [],
  };

  const destructionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DESTRUCTION_ASTEROID:
            return {
                ...state,
                destructions: action.asteroid
            }
        default:
            return state
    }
  }

  export const setDestructionAsteroid = (asteroid) => ({ type: SET_DESTRUCTION_ASTEROID, asteroid });

  export default destructionsReducer;