const calculatingTheDate = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = (date.getMonth() + 1);
    if (month < 10) month = "0" + month;
    let day = date.getDate()
    let objectWithDate = {
        "year":year,
        "month":month,
        "day":day,
    }
    return objectWithDate;
}

export default calculatingTheDate;