export const mutateNameOfAsteroids = (nameOfAsteroids) => {
    
    let arr = nameOfAsteroids.split('');
    if (arr[0] === '('){
    delete arr[0];
    delete arr[(arr.length-1)];
    return arr.join('');
    } else {
        for (let i=0; i<=arr.length; i++) {
            if(arr[i] === '('){
                delete arr[i];
                delete arr[(arr.length-1)];
                return arr.join('');
            } else {delete arr[i]}
        }
        return arr.join('');
    }
}