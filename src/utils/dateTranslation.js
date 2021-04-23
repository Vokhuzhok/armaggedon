export const dateTranslation = (date) => {
    let arr = date.split('-');
    switch (arr[1]){
        case '01':
            arr[1] = 'января'
            break;
        case '02':
            arr[1] = 'февраля'
            break;
        case '03':
            arr[1] = 'марта'
            break;
        case '04':
            arr[1] = 'апреля'
            break;
        case '05':
            arr[1] = 'мая'
            break;
        case '06':
            arr[1] = 'июня'
            break;
        case '07':
            arr[1] = 'июля'
            break;
        case '08':
            arr[1] = 'августа'
            break;
        case '09':
            arr[1] = 'сентября'
            break;
        case '10':
            arr[1] = 'октября'
            break;
        case '11':
            arr[1] = 'ноября'
            break;
        case '12':
            arr[1] = 'декабря'
            break;
        default: 
            return arr;
    }
    const revArr = arr.reverse()
    return revArr.join(' ');
    
}