import calculatingTheDate from "../utils/calculatingTheDate"

const date = calculatingTheDate();

export const asteroidsAPI = {
    getFirstAsteroids() {
        return fetch (`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date.year}-${date.month}-${date.day}&end_date=${date.year}-${date.month}-${date.day}&api_key=DEMO_KEY`)
        .then(response => response.json())
        .then(data => {return data})
    },

    getAsteroidsData(linkOnNextPage) {
        return fetch (`${linkOnNextPage}`)
        .then(response => response.json())
        .then(data => {return data})
    }
}
