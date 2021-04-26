export const mutateTime = (time) => {
    let arr=time.split('');
    for (let i=0; i<=arr.length;i++){
        if (arr[i] === " "){
            delete arr[i]
            return arr.join('');
        } else { delete arr[i] }
    }

}