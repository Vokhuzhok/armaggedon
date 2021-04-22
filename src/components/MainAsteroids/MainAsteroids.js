import React from "react";

const MainAsteroids = (props) => {
    console.log(props.asteroids.near_earth_objects)
    let arr = Object.values(props.asteroids.near_earth_objects)
    console.log(arr[0])
    return <div>1</div>
};

export default MainAsteroids;