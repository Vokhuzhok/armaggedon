export const getAsteroids = (state) => {
    return state.asteroidsData.asteroids
}

export const getIsLoading = (state) => {
    return state.asteroidsData.isLoading
}

export const getInitial = (state) => {
    return state.asteroidsData.initial
}

export const getDistanceToTheMoon = (state) => {
    return state.asteroidsData.distanceToTheMoon
}