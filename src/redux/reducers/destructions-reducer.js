const SET_DESTRUCTION_ASTEROID ="SET_DESTRUCTION_ASTEROID";
const SET_ALL_TO_ORDER="SET_ALL_TO_ORDER";

let initialState = {
    destructions: [],
  };

  const destructionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DESTRUCTION_ASTEROID:
            return {
                ...state,
                destructions: [...state.destructions, action.asteroid]
            }
        case SET_ALL_TO_ORDER:
            return {
                ...state,
                destructions: action.order
            }
        default:
            return state
    }
  }

  export const setDestructionAsteroid = (asteroid) => ({ type: SET_DESTRUCTION_ASTEROID, asteroid });
  export const setAllToOrder = (order) => ({type: SET_ALL_TO_ORDER, order})

  export default destructionsReducer;